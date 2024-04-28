'use client'
import { useState, Fragment } from 'react'

export default function DropdownMenu({ value, onChange, list }) {
    const [isOpen, setIsOpen] = useState(false)

    const toggleDrawer = () => {
        setIsOpen(previous => !previous)
    }
    return (
        <>
            <div className="relative mt-2">
                <button
                    type="button"
                    onClick={toggleDrawer}
                    className="relative text-[13px] text-tremor-brand-boulder950 w-full h-14 cursor-default rounded-2xl bg-transparent py-1.5 pl-3 pr-10 text-left shadow-sm ring-1 ring-inset ring-tremor-brand-boulder200 focus:outline-none focus:ring-2 focus:ring-tremor-background-darkYellow sm:text-sm sm:leading-6">
                    <span className="flex items-center">
                        <span className="ml-3 block truncate">{value}</span>
                    </span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                        <i
                            className="fas fa-angle-down w-5 text-gray-400"
                            aria-hidden="true"></i>
                    </span>
                </button>

                <div
                    style={{
                        boxShadow: '0px 20px 417px 0px #00000012',
                    }}
                    className={`absolute z-[500] duration-300 top-[60px] max-h-56 w-full overflow-auto rounded-3xl bg-white text-base shadow-lg focus:outline-none sm:text-sm py-3 ${
                        isOpen
                            ? 'visible opacity-100 translate-y-0'
                            : 'invisible opacity-0 translate-y-2'
                    }`}>
                    {list.map(item => (
                        <div
                            onClick={() => {
                                setIsOpen(false)
                                onChange(item)
                            }}
                            key={crypto.randomUUID()}
                            className={
                                'text-tremor-brand-boulder300 cursor-pointer border-transparent relative h-[42px] text-[13px] border select-none py-2 pl-3 pr-9 hover:bg-[#FFBB0A0F] hover:text-tremor-brand-boulder950 hover:border-[#FFBB0A0D]'
                            }>
                            <div className="flex items-center">
                                <span
                                    className={
                                        'ml-3 block truncate font-normal'
                                    }>
                                    {item}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
