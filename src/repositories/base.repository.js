class BaseRepository {

    constructor(model) {
        this.model = model;
    }

    async findMany(query = {}, options = {}) {
        const {
            limit = 10, offset = 0,
            include = []
        } = options;
        return this.model.findAll({
            where: query,
            include,
            limit,
            offset
        });
    }

    async findOne(query = {}) {
        return this.model.findOne({
            where: query
        });
    }

    async updateOne(query = {}, updateBody = {}) {

    }

    async insert(body) {
        return this.model.create(body);
    }
}

module.exports = BaseRepository;