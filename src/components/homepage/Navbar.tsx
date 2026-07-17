"use client";

import Link from "next/link";
import Image from "next/image";
import { cinzel } from "@/app/fonts";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;

  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState(false);


  const handleLogOut = async () => {
    await authClient.signOut();
    redirect("/auth/login");
  };


  const navLinks = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Explore Books",
      href: "/all-books",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];


  const isActive = (href: string) => {
    return pathname === href;
  };


  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md">

      <div className="mx-auto flex py-2 w-10/12 items-center justify-between">


        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">

          <Image
            src="/bookNest_logo.png"
            alt="BookNest"
            width={60}
            height={60}
            className="rounded-full"
          />

          <div>
            <h2 className="text-2xl font-extrabold">
              <span className={`${cinzel.className} text-[#3b1a08] dark:text-white`}>
                Book
              </span>

              <span className={`${cinzel.className} text-orange-400`}>
                Nest
              </span>
            </h2>

            <p className="-mt-1 text-xs text-black/80">
              Read • Discover • Inspire
            </p>
          </div>

        </Link>



        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-8 font-medium">


          {navLinks.map((link)=>(

            <Link
              key={link.href}
              href={link.href}
              className={`
                ${cinzel.className}
                text-xl transition
                ${
                  isActive(link.href)
                  ? "text-orange-500 font-extrabold border-b-2 border-orange-500"
                  : "text-gray-800 dark:text-gray-200 hover:text-[#3b1a08] dark:hover:text-orange-400 hover:font-extrabold"
                }
              `}
            >
              {link.name}
            </Link>

          ))}



          {
            user?.role === "admin" && (

              <Link
                href="/admin/manage-books"
                className={`
                ${cinzel.className}
                text-xl transition
                ${
                  pathname.includes("/admin")
                  ? "text-orange-500 font-extrabold border-b-2 border-orange-500"
                  : "text-gray-800 dark:text-gray-200 hover:text-[#3b1a08] dark:hover:text-orange-400"
                }
                `}
              >
                Manage Books
              </Link>

            )
          }



          {
            user?.role === "user" && (

              <>
                <Link
                  href="/user/add-book"
                  className={`
                  ${cinzel.className}
                  text-xl transition
                  ${
                    pathname.includes("add-book")
                    ? "text-orange-500 font-extrabold border-b-2 border-orange-500"
                    : "text-gray-800 dark:text-gray-200 hover:text-[#3b1a08] dark:hover:text-orange-400"
                  }
                  `}
                >
                  Add Book
                </Link>


                <Link
                  href="/user/my-books"
                  className={`
                  ${cinzel.className}
                  text-xl transition
                  ${
                    pathname.includes("my-books")
                    ? "text-orange-500 font-extrabold border-b-2 border-orange-500"
                    : "text-gray-800 dark:text-gray-200 hover:text-[#3b1a08] dark:hover:text-orange-400"
                  }
                  `}
                >
                  My Books
                </Link>

              </>

            )
          }


        </nav>





        {/* Desktop Auth */}
        <div className="hidden lg:flex items-center gap-3">


          {
            !user ? (

              <>

              <Link
                href="/auth/login"
                className={`${cinzel.className} rounded-lg border border-[#3b1a08] px-5 py-2 font-semibold text-[#3b1a08] hover:bg-blue-50`}
              >
                Login
              </Link>


              <Link
                href="/auth/register"
                className={`${cinzel.className} rounded-lg bg-[#3b1a08] px-5 py-2 font-semibold text-white hover:bg-[#2a1206]`}
              >
                Register
              </Link>

              </>


            ) : (

              <>

              <Image
                src={user.image || "/default-avatar.png"}
                alt="User"
                width={42}
                height={42}
                className="rounded-full border"
              />


              <button
              onClick={handleLogOut}
              className={`${cinzel.className} rounded-lg bg-red-500 px-5 py-2 text-white hover:bg-red-600`}
              >
                Logout
              </button>

              </>

            )
          }


        </div>





        {/* Mobile Button */}
        <button
        onClick={()=>setOpenMenu(!openMenu)}
        className="lg:hidden text-3xl"
        >
          ☰
        </button>


      </div>






      {/* Mobile Menu */}

      {
        openMenu && (

          <div className="lg:hidden bg-white border-t shadow-md">


            <nav className="flex flex-col gap-5 p-6">


              {
                navLinks.map((link)=>(

                  <Link
                  key={link.href}
                  onClick={()=>setOpenMenu(false)}
                  href={link.href}
                  className={`
                  ${cinzel.className}
                  text-lg
                  ${
                    isActive(link.href)
                    ? "text-orange-500 font-bold"
                    : ""
                  }
                  `}
                  >
                    {link.name}
                  </Link>

                ))
              }



              {
                user?.role==="admin" && (

                  <Link
                  onClick={()=>setOpenMenu(false)}
                  href="/admin/manage-books"
                  className={`${cinzel.className}`}
                  >
                    Manage Books
                  </Link>

                )
              }



              {
                user?.role==="user" && (

                  <>
                  <Link
                  onClick={()=>setOpenMenu(false)}
                  href="/user/add-book"
                  className={`${cinzel.className}`}
                  >
                    Add Book
                  </Link>


                  <Link
                  onClick={()=>setOpenMenu(false)}
                  href="/user/my-books"
                  className={`${cinzel.className}`}
                  >
                    My Books
                  </Link>

                  </>

                )
              }




              {
                !user ? (

                  <>

                  <Link
                  href="/auth/login"
                  className={`${cinzel.className}`}
                  >
                    Login
                  </Link>


                  <Link
                  href="/auth/register"
                  className={`${cinzel.className}`}
                  >
                    Register
                  </Link>

                  </>


                ) : (

                  <button
                  onClick={handleLogOut}
                  className={`${cinzel.className} text-left text-red-500`}
                  >
                    Logout
                  </button>

                )
              }



            </nav>


          </div>

        )
      }


    </header>
  );
};


export default Navbar;