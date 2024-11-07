import SignUp from "@/components/signup";
import { LogIn } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function IndexPage() {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="max-w-md w-full">
                <SignUp />
            </div>
            
        </div>
    );
}