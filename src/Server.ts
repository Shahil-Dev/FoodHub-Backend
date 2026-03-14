import app from "./App.js";
import { prisma } from "./lib/prisma.js";


const PORT = process.env.PORT || 5000;

async function main() {
    try {
        await prisma.$connect();
        console.log("Database connected successfully");

        if (process.env.NODE_ENV !== "production") {
            app.listen(PORT, () => {
                console.log(`Server is running on port ${PORT}`);
            });
        }
    } catch (error) {
        console.error("Database connection failed:", error);
    }
}

main();

export default app;