import message from "../../assets/chat.png";
import user from "../../assets/user.png";

const Navbar = () => {
  return (
    <div className="py-3 dark:bg-slate-800">
      <div className="main-container">
        <div className="flex items-center justify-end gap-3">
          <img className="w-[30px] h-[30px]" src={message} alt="message" />
          <img className="w-[30px] h-[30px]" src={user} alt="user" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
