class BaseRepository {

    constructor(model) {
        this.model = model;
    }

    async findMany(query = {}, options = {}) {
        const {
            limit = 10, offset = 0,
            include = [],
            transaction
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

    async findCount(query) {
        return this.model.count({ where: query });
    }

    async update(query = {}, updateBody = {}, options={}) {
        const {
            limit = 10, offset = 0,
            include = [],
            transaction
        } = options; 
        return this.model.update(updateBody, {
            where: query,
            limit,
            offset,
            transaction

        });
    }

    async insert(body, { transaction } = {}) {
        return this.model.create(body, { transaction });
    }

    async increment(query = {}, updateBody = {}, { transaction } = {}) {
        return this.model.increment(updateBody,
            { where: query }, { transaction });
    }

    async decrement(query = {}, updateBody = {}, { transaction } = {}) {
        return this.model.decrement(updateBody,
            { where: query,transaction });
    }
}

module.exports = BaseRepository;