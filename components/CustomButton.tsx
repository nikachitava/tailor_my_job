import { ICustomButton } from "@/types/ICustomButton";

const CustomButton = ({ title, onClick, className }: ICustomButton) => {
    return (
        <button className={`${className}`} onClick={onClick}>
            {title}
        </button>
    );
};

export default CustomButton;
