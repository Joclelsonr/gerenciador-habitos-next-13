'use client';

import { useEffect, useState } from "react";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";

function getDaysInMonth(month: number, year: number) {
    const date = new Date(year, month, 1);
    const firstDayWeekDay = date.getDay();
    const numberOfEmptyDays = Array(firstDayWeekDay).fill(null);
    const days = [...numberOfEmptyDays];
    while (date.getMonth() === month) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    return days;
}

const currentDate = new Date();
const currentMonth = currentDate.getMonth();
const currentYear = currentDate.getFullYear();

const weekDays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
const daysInMonth = getDaysInMonth(currentMonth, currentYear);

export default function Calendar() {
    const [month, setMonth] = useState(currentMonth);
    const [year, setYear] = useState(currentYear);
    const [daysInMonth, setDaysInMonth] = useState(getDaysInMonth(month, year));
    const [selectedDate, setSelectedDate] = useState(new Date());

    useEffect(() => {
        setDaysInMonth(getDaysInMonth(month, year));
        setSelectedDate(new Date(year, month, 1));
    }, [month, year]);


    function goToPreviousMonth() {
        if (month === 0) {
            setMonth(11);
            setYear(year - 1);
        } else {
            setMonth(month - 1);
        }
    }

    function goToNextMonth() {
        if (month === 11) {
            setMonth(0);
            setYear(year + 1);
        } else {
            setMonth(month + 1);
        }
    }

    function getFullDateString() {
        const monthName =  selectedDate.toLocaleString('pt-BR', { month: 'long' });
        const upperCaseMonthName = monthName.charAt(0).toUpperCase() + monthName.slice(1);
        return `${upperCaseMonthName} de ${selectedDate.getFullYear()}`;
    }

    return (
        <section className="w-full my-2 rounded-md bg-neutral-800">
                <div className="flex justify-between mx-2 my-4 font-sans text-neutral-400">
                    <button onClick={goToPreviousMonth}>
                        <IconArrowLeft size={22} />
                    </button>
                    <span>{getFullDateString()}</span>
                    <button onClick={goToNextMonth}>
                        <IconArrowRight size={22} />
                    </button>
                </div>
                <div className="grid w-full grid-cols-7 mt-2">
                    {weekDays.map((day) => (
                        <div key={day} className="flex flex-col items-center p-2">
                            <span className="font-sans text-xs font-light text-neutral-200">{day}</span>
                        </div>
                    ))}
                    {daysInMonth.map((day, index) => (
                        <div key={index} className="flex flex-col items-center p-2">
                            <span className="font-sans text-xs font-light text-neutral-400">{day?.getDate()}</span>
                        </div>
                    ))}
                </div>
            </section>
    )
}