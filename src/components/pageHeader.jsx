import { motion } from "framer-motion";
import { FaChevronRight } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { usePreviousLocation } from "../context/PreviousLocationProvider";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.3,
            delayChildren: 0.5,
        },
    },
};

const fadeUpVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

const formatPathSegments = (path) => {
    if (!path || path === "/") return [{ label: "Home", path: "/" }];
    const segments = path.split("/").filter(Boolean);
    let currentPath = "";
    return segments.map((segment) => {
        currentPath += `/${segment}`;
        return {
            label: segment.replace(/[-_]/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
            path: currentPath,
        };
    });
};

const PageHeader = ({ title, subtitle, description, align = "left" }) => {
    const prevLocation = usePreviousLocation()
    const { pathname } = useLocation();

    const previousSegments = formatPathSegments(prevLocation?.pathname);
    const currentSegments = formatPathSegments(pathname);

    const breadcrumbs = [...previousSegments, ...currentSegments].filter(
        (v, i, a) => a.findIndex(t => t.path === v.path) === i
    );

    const alignment = align === "center" ? "text-center" : "text-left";

    return (
        <motion.div
            className={`w-full relative text-white ${alignment} px-6 md:px-12 lg:space-y-10 space-y-4`}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {subtitle && (
                <motion.p
                    className="tracking-[0.3em] text-sm md:text-2xl uppercase font-bold font-quicksand"
                    variants={fadeUpVariant}
                >
                    {subtitle}
                </motion.p>
            )}

            {title && (
                <motion.h1
                    className={`text-4xl uppercase font-bold font-cormorant ${align === "center" ? "md:text-5xl lg:text-6xl" : "md:text-[100px]"
                        }`}
                    variants={fadeUpVariant}
                >
                    {title}
                    {title === "BAMS VISUALS" && (
                        ""
                    )}
                </motion.h1>
            )}

            {description ? (
                <motion.p
                    className="text-sm md:text-sm lg:text-base font-normal leading-relaxed text-open_sans"
                    variants={fadeUpVariant}
                >
                    {description}
                </motion.p>
            ) : (
                <motion.p
                    className="capitalize text-text_gold flex gap-2 items-center text-sm md:text-sm lg:text-base font-normal leading-relaxed mx-auto text-open_sans"
                    variants={fadeUpVariant}
                >
                    {breadcrumbs.map((crumb, idx) => (
                        <span key={crumb.path} className="flex items-center gap-2">
                            {idx > 0 && <FaChevronRight className="text-xs" />}
                            {crumb.label === "ProjectDetail" ? 
                            <div className={`text-white`}>
                                {crumb.label}
                            </div>
                            :
                            <Link to={crumb.path} className={`hover:underline ${idx === 0 ? "text-text_gold" : "text-white"}`}>
                                {crumb.label}
                            </Link>}
                        </span>
                    ))}
                </motion.p>
            )}
        </motion.div>
    );
};

PageHeader.propTypes = {
    title: PropTypes.string,
    description: PropTypes.any,
    subtitle: PropTypes.string,
    align: PropTypes.string,
}

export default PageHeader;