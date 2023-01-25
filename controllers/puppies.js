import { Puppy } from '../models/puppy.js'

const index = async(req, res) => {
  try{
    const puppies = await Puppy.find({})
    res.send(200).json(puppies)
  } catch(err){
    console.log(err)
    res.send(500).json(err)
  }
}


const show = async(req, res) => {
  try{
    let puppy = Puppy.findById(req.params.id)
    res.send(200).json(puppy)
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

const update = async(req, res) => {
  try{
    let updatedPuppy = await Puppy.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.send(200).json(updatedPuppy)
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
  show,
  createPuppy as create,
  update,
  deletePuppy as delete
}