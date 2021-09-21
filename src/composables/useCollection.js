import {ref} from 'vue'
import {projectFirestore } from '../firebase/config'


const useCollection = (collection) => {
    const error = ref(null)

    const addDoc = async (docID, doc) => {
        console.log(docID, 'data', doc)
        error.value = null
        try {
            await projectFirestore.collection(collection).doc(docID).set(doc)
        }catch(err) {
            console.log(err.message)
            error.value = "could not save the document"
        }
    }
    return {error, addDoc}
}

export default useCollection