
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Polls. | Cadastre-se"
};

export default function RegisterLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div className="">
                {children}
            </div>
        </>
    )
}