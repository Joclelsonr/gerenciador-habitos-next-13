"use server";

import { kv } from "@vercel/kv";
import { revalidatePath } from "next/cache";

type ToggleHabitParams = {
    habit: string;
    habitStreak: Record<string, boolean> | null;
    date: string | null;
    done: boolean;
}

export async function deleteHabit(habit: string) {
    await kv.hdel("habits", habit);

    revalidatePath("/");
}

export async function toggleHabit({ habit, habitStreak, date, done}: ToggleHabitParams) {
    if(!habitStreak || !date) {
        return;
    }

    const updateHabitStreak = {
        [habit] : {
            ...habitStreak,
            [date]: done === undefined ? true : !done
        }
    }

    await kv.hset("habits", updateHabitStreak);
    revalidatePath("/");
}