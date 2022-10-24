const TruckService  = require('../services/truck-service')

const router = require('express').Router()

router.get('/', async (req, res) => {  
    res.send("Hay")
    // res.send(await TruckService.load())
})
router.post('/', async (req,res,next) => {
    // const item = {
    //     number: '90-XK-855',
    //     status: true
    // }
    try {
        const truck = await TruckService.insert(req.body)
        res.send(truck)    
    }
    catch (next){
        console.log(next)
    }
})
router.get('/:truckId', async (req,res,next) => {

    try {
        const truck = await TruckService.find(req.params.truckId)
        res.send(truck)
    }
    catch (next){
        console.log(next)
    }
})

router.put('/enter_truck/:truckId', async (req,res,next) => {
    try {
        const truck = await TruckService.find(req.params.truckId)
        truck.booking.entry_time.push(req.body.date);
        truck.status = true;
        await truck.save();
        res.send(truck)
    }
    catch (next){
        console.log(next)
    }
})
router.put('/exit_truck/:truckId', async (req,res,next) => {
    try {
        const truck = await TruckService.find(req.params.truckId)
        truck.booking.exit_time.push(req.body.date);
        truck.status = false;
        await truck.save();
        res.send(truck)
    }
    catch (next){
        console.log(next)
    }
})


module.exports = router