import aws from "../assets/images/skills/aws.svg"
import bash from "../assets/images/skills/bash.svg"
import docker from "../assets/images/skills/docker.svg"
import firebase from "../assets/images/skills/fire.svg"
import git from "../assets/images/skills/git.svg"
import java from "../assets/images/skills/java.svg"
import nginx from "../assets/images/skills/nginx.svg"
import postgresql from "../assets/images/skills/postgresql.svg"
import react from "../assets/images/skills/react.svg"
import spring from "../assets/images/skills/spring.png"
import stripe from "../assets/images/skills/stripe.svg"
import ts from "../assets/images/skills/typescript-icon.svg"

export const categories = [
  "Frameworks",
  "Styling",
  "Frontend Language",
  "Backend",
  "Programming Language",
  "Database",
  "Serverless",
  "Payments",
  "Containerization",
  "CI/CD",
  "Web Server",
  "Deployment",
  "Static Site Generation",
  "API",
  "Cloud Services",
  "DevOps",
  "Security & Identity",
  "Realtime Database / Hosting",
  "User Experience Layer",
  "Scalable Architecture",
  "CMS",
  "Auth",
]

export const technologies = {
  aws: {
    name: "AWS",
    icon: aws,
    categories: [
      "Cloud Services",
      "Deployment",
      "Serverless",
      "Scalable Architecture",
    ],
  },
  react: {
    name: "React",
    icon: react,
    categories: ["Frameworks", "Frontend Language", "User Experience Layer"],
  },
  typescript: {
    name: "TypeScript",
    icon: ts,
    categories: ["Programming Language", "Frontend Language"],
  },
  docker: {
    name: "Docker",
    icon: docker,
    categories: ["Containerization", "DevOps"],
  },
  spring: {
    name: "Spring",
    icon: spring,
    categories: ["Frameworks", "Backend"],
  },
  firebase: {
    name: "Firebase",
    icon: firebase,
    categories: ["Realtime Database / Hosting", "Auth", "Backend"],
  },
  postgresql: {
    name: "PostgreSQL",
    icon: postgresql,
    categories: ["Database"],
  },
  nginx: {
    name: "NGINX",
    icon: nginx,
    categories: ["Web Server"],
  },
  stripe: {
    name: "Stripe",
    icon: stripe,
    categories: ["Payments"],
  },
  git: {
    name: "Git",
    icon: git,
    categories: ["CI/CD", "DevOps"],
  },
  bash: {
    name: "Bash",
    icon: bash,
    categories: ["DevOps"],
  },
  java: {
    name: "Java",
    icon: java,
    categories: ["Programming Language", "Backend"],
  },
}
