import {friends} from "../utils/constant.js";


const DreamTeam = () => {
    return (
        <section className="float-end row w-50 border border-warning rounded-buttom-4 me-0 ms-2 ">
            <h2 className="text-center">Dream Team</h2>

            {friends.map((friend, item) => (
                <img key={item} src={friend.src} className={`col-sm-4 p-1 ${friend.extraClass}`} alt='friend'/>))}

        </section>
    );
};

export default DreamTeam;