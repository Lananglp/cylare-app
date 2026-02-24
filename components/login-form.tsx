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
    FieldSeparator,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { useTranslations } from "next-intl"
import { Link, useRouter } from "@/i18n/navigation"
import { Controller, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import z from "zod/v3"
import { useState } from "react"
import { authClient } from "@/lib/auth-client";

const schema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
});

type FormData = z.infer<typeof schema>;

export function LoginForm({
    className,
    ...props
}: React.ComponentProps<"div">) {
    const language = useTranslations("LoginPage");
    const router = useRouter();
    const [dataError, setDataError] = useState("");
    
    const { control, register, handleSubmit, formState } = useForm<FormData>({
        resolver: zodResolver(schema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = async (data: FormData) => {
        setDataError("");
        const { data: res, error } = await authClient.signIn.email({
            email: data.email,
            password: data.password,
        });

        if (res?.user) {
            router.push("/dashboard");
            router.refresh();
        }
        
        if (error) {
            if (error.message) {
                setDataError(error.message);
                return;
            }
        }
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
                            <Controller
                                name="password"
                                control={control}
                                render={({ field, fieldState }) => (
                                    <Field data-invalid={fieldState.invalid}>
                                        <div className="flex items-center">
                                            <FieldLabel htmlFor="password">{language("password")}</FieldLabel>
                                            <Link
                                                href="/forgot-password"
                                                className="ml-auto text-sm underline-offset-4 hover:underline"
                                            >
                                                {language("forgotPassword")}
                                            </Link>
                                        </div>
                                        <Input
                                            {...field}
                                            id="password"
                                            type="password"
                                            aria-invalid={fieldState.invalid}
                                            placeholder="password"
                                        />
                                        {fieldState.invalid && (
                                            <FieldError errors={[fieldState.error]} />
                                        )}
                                    </Field>
                                )}
                            />
                            {dataError &&
                                <FieldDescription className="text-red-500">
                                    {dataError}
                                </FieldDescription>
                            }
                            <Field>
                                <Button type="submit">{language("login")}</Button>
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
