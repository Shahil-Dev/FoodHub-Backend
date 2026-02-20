import app from "./App";
import { prisma } from "./lib/prisma";


const PORT = process.env.PORT || 5000;

async function main() {
    try {
        await prisma.$connect();
        console.log("connected to the database successfully");

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error("Failed to connect to the database:", error);
        await prisma.$disconnect();
        process.exit(1);
    }
}




main();