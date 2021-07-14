export default function WrongAutent(res, msg) {
    res.status(401).json({error: true, message: msg})
}