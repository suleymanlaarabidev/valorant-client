import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import FeaturesCard from "../Composant/FeaturesCard";
import "./css/Accueil.css";
import GroupsIcon from "@mui/icons-material/Groups";
import MapIcon from "@mui/icons-material/Map";
import LocalPoliceIcon from "@mui/icons-material/LocalPolice";
import Events from "../Composant/Events";
import gsap from "gsap";
import { UserContext } from "../Context/userContext";

const Accueil = () => {

    const [ScreenWidth, setScreenWidth] = useState(window.innerWidth)


    const { currentUser, Langage } = useContext(UserContext)
    const navigate = useNavigate();
    const FeaturesCardRef = useRef();

    const [FeaturesCardIsVisible, setFeaturesCardIsVisible] = useState(false);
    useEffect(() => {
        if (FeaturesCardIsVisible === true) {

            gsap.to(".featuresCard", {
                opacity: 1,
                duration: 0.4,
                stagger: 0.3,
                y: 100,
            });
        }
    }, [FeaturesCardIsVisible])


    useEffect(() => {

        var resizeIsTrue = true
        window.addEventListener('resize', () => {
            if (resizeIsTrue) {
                resizeIsTrue = false
                window.setTimeout(() => {

                    setScreenWidth(window.innerWidth)
                    console.log("frame")

                    resizeIsTrue = true
                }, 1000)
            }

        })


    }, [])
    useEffect(() => {

        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            setFeaturesCardIsVisible(entry.isIntersecting);
        });
        observer.observe(FeaturesCardRef.current);
        gsap.to(".logo", { opacity: 1, duration: 0.4, y: 120 }).then(() => {
            gsap.to(".heroBanner", { opacity: 1, duration: 0.4, y: 200 }).then(() => {
                gsap.to(".ValorantTitle", {
                    opacity: 1,
                    duration: 0.4,
                    stagger: 0.3,
                    y: 70,
                });
            });
        });

    }, [ScreenWidth]);

    return (
        <div className="Accueil">

            {ScreenWidth > 700 ? <div className="heroBanner">

                <div className="contain">
                    <p className="ValorantTitle">
                        {currentUser ? Langage.Accueil.bienvenue + " " + currentUser.displayName : "Un Client de L'API Valorant pour tout connaitre du jeux"}

                    </p>
                    <svg id="SVGvalo"
                        className="ValorantTitle"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 690 98.9"
                    >
                        <path d="M615.11 19.15h24.69l.08 75.59c0 .97.79 1.77 1.77 1.77l14.14-.01c.98 0 1.77-.79 1.77-1.77l-.08-75.58h30.96c.91 0 1.43-1.06.85-1.77l-10.6-13.26a4.68 4.68 0 0 0-3.65-1.76h-59.93c-.98 0-1.77.79-1.77 1.77v13.26c0 .96.79 1.76 1.77 1.76M19.25 94.75 91.67 4.13c.57-.71.06-1.77-.85-1.77H72.71c-1.42 0-2.77.65-3.65 1.76L17.68 68.4V4.12c0-.98-.79-1.77-1.77-1.77H1.77C.79 2.35 0 3.14 0 4.12v90.62c0 .98.79 1.77 1.77 1.77H15.6c1.42 0 2.76-.65 3.65-1.76m51.06 0 24.91-31.17 24.91 31.17a4.685 4.685 0 0 0 3.66 1.76h13.83c.98 0 1.77-.79 1.77-1.77V4.12c0-.97-.79-1.77-1.77-1.77h-11.6c-2.84 0-5.53 1.29-7.31 3.51L47.69 94.73c-.57.71-.06 1.77.85 1.77h18.11c1.43.01 2.77-.64 3.66-1.75m51.39-66.21v41.75l-16.68-20.87 16.68-20.88zm404.37 66.19L453.65 4.11A4.68 4.68 0 0 0 450 2.35h-13.84c-.98 0-1.77.79-1.77 1.77v90.62c0 .98.79 1.77 1.77 1.77h13.83c1.42 0 2.77-.65 3.65-1.76l24.91-31.17 24.91 31.17a4.68 4.68 0 0 0 3.65 1.76h18.11c.91 0 1.42-1.06.85-1.78m-57.33-45.31L452.05 70.3V28.54l16.69 20.88zM269.45 0c-27.3 0-49.43 22.13-49.43 49.43s22.13 49.43 49.43 49.43 49.43-22.13 49.43-49.43C318.89 22.13 296.75 0 269.45 0m0 82.06c-17.54 0-31.75-14.61-31.75-32.63 0-18.02 14.21-32.64 31.75-32.64S301.2 31.4 301.2 49.43c.01 18.02-14.21 32.63-31.75 32.63M583.38 4.12V68.4L532 4.11a4.68 4.68 0 0 0-3.65-1.76H514.5c-.97 0-1.77.79-1.77 1.77v43.67c0 1.06.36 2.09 1.03 2.92l14.71 18.41c.65.81 1.95.35 1.95-.68v-38l51.39 64.31a4.68 4.68 0 0 0 3.65 1.76h13.83c.98 0 1.77-.79 1.77-1.77V4.12c0-.97-.79-1.77-1.77-1.77h-14.14c-.98 0-1.77.8-1.77 1.77M410.62 23.76V4.12c0-.98-.79-1.77-1.77-1.77h-72.37c-.98 0-1.77.79-1.77 1.77v90.62c0 .98.79 1.77 1.77 1.77h14.14c.98 0 1.77-.79 1.77-1.77V19.16h40.55l-27.37 34.26c-.51.64-.51 1.56 0 2.21l31.27 39.13a4.68 4.68 0 0 0 3.65 1.76h18.11c.91 0 1.42-1.06.85-1.77l-32.14-40.21 22.28-27.84c.66-.85 1.03-1.88 1.03-2.94M162.39 96.51h41.96c1.42 0 2.77-.65 3.65-1.76l10.6-13.27c.57-.71.06-1.77-.85-1.77H178.3V4.12c0-.98-.79-1.77-1.77-1.77h-14.14c-.98 0-1.77.79-1.77 1.77v90.62c0 .97.8 1.77 1.77 1.77"></path>
                    </svg>

                    <div className="ValorantTitle">
                        <button
                            onClick={() => {
                                navigate("/Agents");
                            }}
                            className="btn btn--light"
                        >
                            <span className="btn__inner">
                                <span className="btn__slide"></span>
                                <span className="btn__content">{Langage.Accueil.showAgentsButton}</span>
                            </span>
                        </button>
                    </div>
                </div>

                <video
                    autoPlay
                    type="video/mp4"
                    preload="true"
                    muted
                    loop
                    playsInline
                    poster="https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt714eaee50b90fc27/62cc7dcc6a8fb133b0ff7e55/VALORANT_ANNO22_SHATTERED_16x9_27s.mp4"
                >
                    <source
                        src="https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt714eaee50b90fc27/62cc7dcc6a8fb133b0ff7e55/VALORANT_ANNO22_SHATTERED_16x9_27s.mp4"
                        type="video/mp4"
                    />
                </video>
            </div> : ""}


            <div className="features">
                <h2>FEATURES</h2>

                <div className="FeaturesSubBar"></div>
                <div
                    ref={FeaturesCardRef}
                    onScroll={() => {
                        console.log("test");
                    }}
                    className="featuresCardAll"
                >
                    <FeaturesCard
                        onClick={() => {
                            navigate("/Agents");
                        }}
                        title={Langage.Accueil.Features.titleAgents}
                        description={Langage.Accueil.Features.Agents}
                        icon={<GroupsIcon fontSize="large" className="icon" />}
                    />
                    <FeaturesCard
                        onClick={() => {
                            navigate("/Armes");
                        }}
                        title={Langage.Accueil.Features.titleArmes}
                        description={Langage.Accueil.Features.Armes}
                        icon={<LocalPoliceIcon fontSize="large" className="icon" />}
                    />
                    <FeaturesCard
                        onClick={() => {
                            navigate("/Cartes");
                        }}
                        title={Langage.Accueil.Features.titleCartes}
                        description={Langage.Accueil.Features.Cartes}
                        icon={<MapIcon fontSize="large" className="icon" />}
                    />
                </div>
            </div>
            <div className="features">
                <h2>{Langage.Accueil.EventTitle} VALORANT</h2>

                <div className="FeaturesSubBar"></div>
                <div className="featuresCardAll">
                    <Events />
                </div>
            </div>
        </div>
    );
};

export default Accueil;
