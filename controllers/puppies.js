import { Puppy } from '../models/puppy.js'

const index = async(req, res) => {
  try{
    const puppies = await Puppy.find({}).sort({ createdAt: 'desc'})
    res.send(200).json(puppies)
  } catch(err){
    console.log(err)
    res.send(500).json(err)
  }
}


const createPuppy= async(req, res) => {
  try {
    let puppy = await Puppy.create(req.body)
    res.send(200).json(puppy)
  } catch(err){
    console.log(err)
    res.send(500).json(err)
  }

}

const deletePuppy = async(req, res) => {
  try{
    let deletedPuppy = await Puppy.findByIdAndDelete(req.params.id)
    res.send(200).json(deletedPuppy)
  } catch(err){
    console.log(err)
    res.send(500).json(err)
  }
}


export {
  index,
  createPuppy as create,
  deletePuppy as delete
}