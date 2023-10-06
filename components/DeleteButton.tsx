'use client';

import { deleteHabit } from "@/app/actions";
import { IconTrash } from "@tabler/icons-react";

export default function DeleteButton({ habit }: { habit: string }) {
    return (
        <button onClick={() => deleteHabit(habit)}>
            <IconTrash size={20} color="red" />
        </button>
    );
}
