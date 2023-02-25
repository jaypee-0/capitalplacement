import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUsers, setID } from "../../../../slices/usersSlice";
import { LocationOn } from "@mui/icons-material";
import SchoolIcon from "@mui/icons-material/School";

interface PersonProps {
    id: number;
    firstName: string;
    lastName: string;
    image: string;
    address: {} | any;
}
const Qualified = ({idO, setidO}:any) => {
    const dispatch = useDispatch();
    const persons = useSelector(selectUsers);
    //console.log(persons, "-- PERSONS");

    //const [activeIndex, setActiveIndex] = React.useState<number | boolean>(parseInt(persons.users.slice(0, 1).map(({id}:any) => id+1)));
    const [activeIndex, setActiveIndex] = React.useState<number>(1);
    console.log(activeIndex, "-- ACTIVE INDEX");
    const active = (id: number) => {
        if (activeIndex === id) {
            return setActiveIndex(activeIndex);
        } else {
          setActiveIndex(id);
          dispatch(setID(id));
          setidO(id)
          console.log(idO, "ido")
        }
    };

    return (
        <div>
            <div>
                {persons?.users.slice(0, 3).map(({ id, firstName, lastName, image, address }: PersonProps) => {
                    return (
                        <div
                            key={id}
                            className={`w-full p-2 rounded-xl mb-3 flex flex-row items-center cursor-pointer ${
                                activeIndex === id ? "border-[#00635B] shadow-none border-[1px]" : "border-gray-100 shadow-sm shadow-gray-400 border-[1px]"
                            }`}
                            onClick={() => active(id)}
                        >
                            <img src={image} alt={firstName + ".png"} className="rounded-full h-[55px] w-[55px] mr-3 border-[#00635B] border-[1px]" />
                            <div>
                                <h1>{firstName + " " + lastName}</h1>
                                <div className="flex flex-row text-xs items-center">
                                    <LocationOn sx={{ fontSize: 10 }} />
                                    <p className="ml-1">{address.city + ", " + address.state}</p>
                                </div>
                                <div className="flex flex-row text-xs items-center">
                                    <SchoolIcon sx={{ fontSize: 10 }} />
                                    <p className="ml-1">{"MSC, Computer Science"}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Qualified;
