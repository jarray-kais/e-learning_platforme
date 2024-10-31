import Link from "next/link";
import styles from "../styles/Header.module.css";
const Header = () => {
  return (
    <>
      <div className={styles.image}>
        <div className={styles.navbar}>
          <div className="navbar bg-base-100 mr-0 bg-opacity-0">
            <div className="flex-1">
              <Link href='/'  className="btn btn-ghost text-xl">
              Education
              </Link>
              
            </div>
            <div className="flex-none gap-2">
            <Link href=''  className="btn btn-ghost text-xl">
            Main Feature 
            </Link>
            <Link href=''  className="btn btn-ghost text-xl">
            Popular Course 
            </Link>
            <Link href=''  className="btn btn-ghost text-xl">
            Explore 
            </Link>
            <Link href=''  className="btn btn-ghost text-xl">
            Blog 
            </Link>
            <Link href=''  className="btn btn-ghost text-xl">
            Contact 
            </Link>
            </div>
            <div className="flex-none gap-2">
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Search course …"
                  className="input input-bordered w-24 md:w-auto"
                />
              </div>
              <div className={styles.deco}>
                <div className={styles.nav}>
                  <div className="dropdown dropdown-end">
                    <div className="btn btn-ghost glass text-xl">Login</div>
                    {/* <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                          <div className="w-10 rounded-full">
                            <img
                              alt="Tailwind CSS Navbar component"
                              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" 
                            
                              />
                          </div>
                        </div>
                        <ul
                          tabIndex={0}
                          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                          <li>
                            <a className="justify-between">
                              Profile
                              <span className="badge">New</span>
                            </a>
                          </li>
                          <li><a>Settings</a></li>
                          <li><a>Logout</a></li>
                        </ul> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
