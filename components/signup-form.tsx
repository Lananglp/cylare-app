"use client";
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Field,
    FieldDescription,
    FieldError,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { useTranslations } from "next-intl"
import { Link, useRouter } from "@/i18n/navigation"
import z from "zod"
import { useState } from "react"
import { Controller, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { authClient } from "@/lib/auth-client";

export const registerSchema = z
  .object({
    name: z.string().min(2, "Nama terlalu pendek"),
    email: z.string().email("Email tidak valid"),
    password: z.string().min(6, "Minimal 6 karakter"),
    confirmPassword: z.string().min(6, "Minimal 6 karakter"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password tidak sama",
    path: ["confirmPassword"],
  });

export type RegisterInput = z.infer<typeof registerSchema>;

export function SignupForm({
    className,
    ...props
}: React.ComponentProps<"div">) {
    const language = useTranslations("RegisterPage");
    const appName = process.env.NEXT_PUBLIC_APP_NAME;

    const router = useRouter();
    const [dataError, setDataError] = useState("");
    const [loading, setLoading] = useState(false);

    const { control, register, handleSubmit, formState } = useForm<RegisterInput>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
    });

    const onSubmit = async (data: RegisterInput) => {
        setDataError("");
        setLoading(true);

        const { data: res, error } = await authClient.signUp.email({
            email: data.email,
            password: data.password,
            name: data.name,
            callbackURL: "/dashboard",
        });

        if (res?.user) {
            router.push("/dashboard");
            router.refresh();
            setLoading(false);
        }

        if (error) {
            if (error.message) {
                setDataError(error.message);
                return;
            }
            setLoading(false);
        }

        // Kalau perlu verifikasi email
        // if (res?.emailVerificationRequired) {
        //     router.push("/verify-email");
        //     return;
        // }
    };

    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <Card>
                <CardHeader className="text-center">
                    <CardTitle className="text-xl">{language("title")}</CardTitle>
                    <CardDescription>
                        {language("description")}
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <FieldGroup>
                            <Controller
                                name="name"
                                control={control}
                                render={({ field, fieldState }) => (
                                    <Field data-invalid={fieldState.invalid}>
                                        <FieldLabel htmlFor="name">{language("name")}</FieldLabel>
                                        <Input
                                            {...field}
                                            id="name"
                                            type="text"
                                            aria-invalid={fieldState.invalid}
                                            placeholder={language("name")}
                                        />
                                        {fieldState.invalid && (
                                            <FieldError errors={[fieldState.error]} />
                                        )}
                                    </Field>
                                )}
                            />
                            <Controller
                                name="email"
                                control={control}
                                render={({ field, fieldState }) => (
                                    <Field data-invalid={fieldState.invalid}>
                                        <FieldLabel htmlFor="email">{language("email")}</FieldLabel>
                                        <Input
                                            {...field}
                                            id="email"
                                            type="email"
                                            aria-invalid={fieldState.invalid}
                                            placeholder="email@gmail.com"
                                        />
                                        {fieldState.invalid && (
                                            <FieldError errors={[fieldState.error]} />
                                        )}
                                    </Field>
                                )}
                            />
                            <Field>
                                <Field className="grid grid-cols-2 gap-4">
                                    <Controller
                                        name="password"
                                        control={control}
                                        render={({ field, fieldState }) => (
                                            <Field data-invalid={fieldState.invalid}>
                                                <FieldLabel htmlFor="password">{language("password")}</FieldLabel>
                                                <Input
                                                    {...field}
                                                    id="password"
                                                    type="password"
                                                    aria-invalid={fieldState.invalid}
                                                    placeholder={language("password")}
                                                />
                                                {fieldState.invalid && (
                                                    <FieldError errors={[fieldState.error]} />
                                                )}
                                            </Field>
                                        )}
                                    />
                                    <Controller
                                        name="confirmPassword"
                                        control={control}
                                        render={({ field, fieldState }) => (
                                            <Field data-invalid={fieldState.invalid}>
                                                <FieldLabel htmlFor="confirmPassword">{language("confirmPassword")}</FieldLabel>
                                                <Input
                                                    {...field}
                                                    id="confirmPassword"
                                                    type="password"
                                                    aria-invalid={fieldState.invalid}
                                                    placeholder={language("confirmPassword")}
                                                />
                                                {fieldState.invalid && (
                                                    <FieldError errors={[fieldState.error]} />
                                                )}
                                            </Field>
                                        )}
                                    />
                                </Field>
                                <FieldDescription className={dataError ? "text-red-500" : ""}>
                                    {dataError ? dataError : language("passwordInfo")}
                                </FieldDescription>
                            </Field>
                            <Field>
                                <Button type="submit">{language("register")}</Button>
                                <FieldDescription className="text-center">
                                    {language.rich("accountReady", {
                                        link: (chunks) => (
                                            <Link href="/sign-in">{chunks}</Link>
                                        ),
                                    })}
                                </FieldDescription>
                            </Field>
                        </FieldGroup>
                    </form>
                </CardContent>
            </Card>
            <FieldDescription className="px-6 text-center">
                {language.rich("footer", {
                    terms: (chunks) => (
                        <Link
                            href="/terms"
                            className="underline-offset-4 hover:underline"
                        >
                            {chunks}
                        </Link>
                    ),
                    privacy: (chunks) => (
                        <Link
                            href="/privacy"
                            className="underline-offset-4 hover:underline"
                        >
                            {chunks}
                        </Link>
                    ),
                })}
            </FieldDescription>
        </div>
    )
}
