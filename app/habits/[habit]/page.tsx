import { kv } from "@vercel/kv";
import Link from "next/link";
import { IconArrowBack } from "@tabler/icons-react";
import Calendar from "@/components/Calendar";

export default async function Habits({ params }: { params: { habit: string }}) {
    const decodedHabit = decodeURI(params.habit);
    const habitStreak = await kv.hget("habits", decodedHabit);

    return (
        <main className="container relative flex flex-col gap-8 px-4 pt-16" >
            <h1 className="text-2xl font-light text-center text-white font-display">
                {decodedHabit}
            </h1>
            <Link href="/" className="flex items-center font-sans text-xl text-neutral-300 gap-2">
                <IconArrowBack size={22} />
                Voltar
            </Link>
            <Calendar />
        </main>
    )
}