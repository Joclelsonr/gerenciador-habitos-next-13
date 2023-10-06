import { kv } from "@vercel/kv";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
// import GoBackButton from "@/components/GoBackButton";

export default function HabitsNew() {
    async function newHabit(formData: FormData) {
        "use server"

        const habit = formData.get("habit");
        await kv.hset("habits", { [habit as string]: {} });
        revalidatePath("/")
        redirect("/")
    }

    return (
        <main className="container relative flex flex-col gap-8 px-4 pt-16">
            <h1 className="text-4xl font-light text-center text-white font-display">
                Novo Hábito
            </h1>
            <form action={newHabit} className="flex flex-col gap-4 mt-4">
                <input 
                    type="text" 
                    placeholder="Nome do hábito"
                    // id="habit"
                    name="habit"
                    className="p-2 font-sans text-xl text-white rounded-md bg-neutral-800"
                />
                <button type="submit" className="bg-[#45EDAD] font-display text-neutral-900 text-2xl p-2 rounded-md mt-8">
                    Cadastrar
                </button>
                {/* <GoBackButton /> */}
            </form>
        </main>
    )
}