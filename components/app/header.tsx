import { CircleIcon, CreditCardIcon, LogOutIcon, SettingsIcon, UserIcon } from "lucide-react"
import LanguageSwitcher from "../language-switcher"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu"
import { Button } from "../ui/button"
import { authClient } from "@/lib/auth-client"

export const AppHeader = () => {
    const appName = process.env.NEXT_PUBLIC_APP_NAME;
    const {
        data: session,
        isPending, //loading state
    } = authClient.useSession();

    return (
        <div className='flex justify-between items-center px-4 py-2 bg-background'>
            <div className='flex items-center gap-2'>
                <CircleIcon size={28} />
                <div>{appName}</div>
            </div>
            <div className='flex items-center gap-2'>
                <LanguageSwitcher />
                {session?.user && (
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size={'sm'}><UserIcon /> {session.user.name}</Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem>
                                <UserIcon />
                                Profile
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <CreditCardIcon />
                                Billing
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <SettingsIcon />
                                Settings
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem variant="destructive">
                                <LogOutIcon />
                                Log out
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                )}
            </div>
        </div>
    )
}