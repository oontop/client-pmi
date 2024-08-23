///Footer.tsx
const Footer = () => {

    return (
        <div className=" md:px-14 p-4 max-w-screen-2xl mx-auto dark:text-white mt-2  ">
            <hr />
            {/* add here link to onntop helath */}
            <p>© {(new Date()).getFullYear()} <a href="https://www.oontop.com/" target="_blank">Oontop-Helath</a>. All rights reserved.</p>
        </div>
    )
}

export default Footer