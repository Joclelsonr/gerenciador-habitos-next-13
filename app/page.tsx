import Link from "next/link";
import DayState from "@/components/DayState";
import { IconTrash } from "@tabler/icons-react";

export default function Home() {
    const habits = {
        Estudar: {
            "2023-10-01": true,
            "2023-10-02": true,
            "2023-10-03": true,
        },
        Correr: {
            "2023-10-02": true,
            "2023-10-03": true,
            "2023-10-04": true,
        },
    };

    const today = new Date();
    const todayWeekDay = today.getDay();
    const weekDays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
    const weekDaysOrdered = weekDays.slice(todayWeekDay +1).concat(weekDays.slice(0, todayWeekDay +1));

    return (
        <main className="container relative flex flex-col gap-8 px-4 pt-16">
            {habits === null ||
                (Object.keys(habits).length === 0 && (
                    <h1 className="mt-20 text-4xl font-light text-white font-display text-center">
                        Você não tem hábitos cadastrados
                    </h1>
                ))}
            {habits !== null &&
                Object.entries(habits).map(([habit, habitStreak]) => (
                    <div key={habit} className="flex flex-col gap-2">
                        <div className="flex justify-between items-center">
                            <span className="text-xl font-light text-white font-sans">
                                {habit}
                            </span>
                            <button>
                                <IconTrash size={20} color="red" />
                            </button>
                        </div>
                        <section className="grid grid-cols-7 bg-neutral-800 rounded-md p-2">
                            {weekDaysOrdered.map((day) => (
                                <div key={day} className="flex flex-col last:font-bold">
                                    <span className="font-sans text-xs text-white text-center">
                                        {day}
                                    </span>
                                    <DayState day={undefined} />
                                </div>
                            ))}
                        </section>
                    </div>
                ))}
                <Link href="habits-new" className="fixed text-center bottom-10 w-2/3 left-1/2 -translate-x-1/2 text-neutral-900 bg-[#45EDAD] font-display text-2xl p-2 rounded-md">
                  Novo Hábito
                </Link>
        </main>
    );
}
