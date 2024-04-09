import { MdModeEditOutline } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";

const MyMeals = ({text, updatingInInput, deleteMeal}) => {
    return (
        <div>
            <p>{text}</p>
            <MdModeEditOutline onClick={updatingInInput} />
            <MdDeleteForever onClick={deleteMeal} />
        </div>
    )
}
export default MyMeals;