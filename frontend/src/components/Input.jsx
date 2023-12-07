import { forwardRef } from 'react';

const Input = forwardRef(function Input({ label, ...props }, ref) {
    return (
        <div className="flex flex-col">
            <label className="uppercase text-slate-800 font-semibold">{label}</label>
            {props.type === 'textarea' && (
                <textarea
                    {...props}
                    ref={ref}
                ></textarea>
            )}
            {props.type !== 'textarea' && (
                <input
                    {...props}
                    ref={ref}
                ></input>
            )}
        </div>
    );
});

export default Input;
