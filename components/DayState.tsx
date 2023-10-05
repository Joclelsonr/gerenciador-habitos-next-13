import { IconCheck, IconCircleDotFilled, IconX } from "@tabler/icons-react";

export default function DayState({ day }: { day: boolean | undefined }) {
    
    const circle = <IconCircleDotFilled size={22} color="white" />
    const check = <IconCheck size={22} color="green" />
    const x = <IconX size={22} color="red" />

    return (
        <div className="flex items-center justify-center h-9">
            <span className="font-sans text-xs text-white">
                {day === undefined ? circle : day ? check : x}
            </span>
        </div>
    )
}
