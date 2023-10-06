"use client"

import { redirect } from "next/navigation";

export default function GoBackButton() {
    return (
        <button onClick={() => redirect("/")} className="bg-neutral-800 text-[#f85858] font-display text-2xl p-2 rounded-md">
            Cancelar
        </button>
    );
}
