function BaseModel(bookshelf) {
    return class extends bookshelf.Model {
        testPlugin() {
            return "testPlugin"
        }
    }
}

export default BaseModel;