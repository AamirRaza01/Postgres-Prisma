import prisma from "../DB/db.config.js"

export const createUser = async (req, res) => {
    try {
        const {name, email, password} = req.body

        const findUser = await prisma.users.findUnique({
            where : {
                email : email
            }
        })

        if(findUser){
            return res.status(400).json( "Email already exist")
        }

        const newUser = await prisma.users.create({
            data : {
                name : name,
                email : email, 
                password : password
            }
        })

        return res.status(200).json({newUser, msg : "User created succesfully"})
        
    } catch (error) {
        
    }
}