import {friends} from "../utils/constant.js";


const DreamTeam = () => {
    return (
        <section className="float-right w-1/2 border border-warning rounded-b-2xl mr-0 ml-2 grid grid-cols-3">
            <h2 className="text-center col-span-3 text-2xl">Dream Team</h2>

            {friends.map((friend, item) => (
                <img key={item} src={friend.src} className={`col-sm-4 p-1 ${friend.extraClass}`} alt='friend'/>))}

        </section>
    );
};

export default DreamTeam;