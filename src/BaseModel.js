function BaseModel(Bookshelf) {
    return class extends Bookshelf.Model {
        testPlugin() {
            return "testPlugin"
        }
    }
}

export default BaseModel;