"use client";
import { HomeSection } from "@/styles/style";
import {
    faReact, faNode, faCss3Alt, faJsSquare
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { FaBullseye, FaPaintBrush, FaSeedling, FaUsers } from "react-icons/fa";

export default function Habilidades() {
    const skills = [
        { name: "React", icon: faReact, level: 75 },
        { name: "Node.js", icon: faNode, level: 80 },
        { name: "CSS", icon: faCss3Alt, level: 70 },
        { name: "JavaScript", icon: faJsSquare, level: 90 },
    ];

    const sortedSkills = skills.sort((a, b) => b.level - a.level);
    return (
        <HomeSection id="habilidades">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Habilidades
            </motion.h1>

            <div style={{ display: "flex", gap: "30px", marginTop: "20px", flexWrap: "wrap" }}>
                {sortedSkills.map((skill, index) => (
                    <motion.div
                        key={index}
                        style={{
                            flex: "1 1 200px",
                            padding: "20px",
                            background: "#f4f4f4",
                            borderRadius: "10px",
                            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 * index }}
                    >
                        <FontAwesomeIcon icon={skill.icon} size="3x" />
                        <h3>{skill.name}</h3>

                        <div style={{ display: "flex", alignItems: "center", width: "100%", marginTop: "10px" }}>
                            <div
                                style={{
                                    width: "100%",
                                    background: "#e0e0e0",
                                    borderRadius: "5px",
                                    height: "8px",
                                    position: "relative",
                                }}
                            >
                                <motion.div
                                    style={{
                                        height: "100%",
                                        borderRadius: "5px",
                                        background: "#7f00ff",
                                    }}
                                    initial={{ width: 0 }}
                                    animate={{ width: `${skill.level}%` }}
                                    transition={{ duration: 1 }}
                                />
                            </div>
                            <span style={{ marginLeft: "10px", fontWeight: "bold", color: "#7f00ff" }}>
                                {skill.level}%
                            </span>
                        </div>
                    </motion.div>
                ))}
            </div>

            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                style={{ paddingTop: '5rem' }}
            >
                Soft Skills
            </motion.h1>

            <div style={{ display: "flex", gap: "30px", marginTop: "20px", justifyContent: "center" }}>
                <motion.div
                    style={{
                        flex: "1 1 150px",
                        padding: "20px",
                        background: "#f4f4f4",
                        borderRadius: "10px",
                        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <FaPaintBrush size="3rem" />
                    <h3>Criatividade</h3>
                </motion.div>

                <motion.div
                    style={{
                        flex: "1 1 150px",
                        padding: "20px",
                        background: "#f4f4f4",
                        borderRadius: "10px",
                        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <FaUsers size="3rem" />
                    <h3>Trabalho em Equipe</h3>
                </motion.div>

                <motion.div
                    style={{
                        flex: "1 1 150px",
                        padding: "20px",
                        background: "#f4f4f4",
                        borderRadius: "10px",
                        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <FaSeedling size="3rem" />
                    <h3>Adaptabilidade</h3>
                </motion.div>

                <motion.div
                    style={{
                        flex: "1 1 150px",
                        padding: "20px",
                        background: "#f4f4f4",
                        borderRadius: "10px",
                        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <FaBullseye size="3rem" />
                    <h3>Foco</h3>
                </motion.div>
            </div>
        </HomeSection>
    )
}