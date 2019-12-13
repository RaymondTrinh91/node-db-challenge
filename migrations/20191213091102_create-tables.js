
exports.up = function (knex) {
    return knex.schema
        .createTable('projects', project => {
            project.increments()

            project.string('name')
                .notNullable()

            project.string('description')

            project.boolean('completed')
                .defaultTo(0)
                .notNullable()
        })

        .createTable('resources', resource => {
            resource.increments()

            resource.string('name')
                .unique()
                .notNullable()

            resource.string('description')
        })

        .createTable('tasks', task => {
            task.increments()

            task.string('description')
                .notNullable()

            task.string('notes')

            task.boolean('completed')
                .defaultTo(0)
                .notNullable()

            task.integer('project_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('projects')
                .onDelete('CASCADE')
                .onUpdate('CASCADE')
        })

        .createTable('project-resources', tbl => {
            tbl.primary(['project_id', 'resource_id'])

            tbl.integer("project_id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("projects")
                .onDelete("CASCADE") 
                .onUpdate("CASCADE");

            tbl.integer("resource_id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("resources")
                .onDelete("CASCADE") 
                .onUpdate("CASCADE");
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('project-resources')
        .dropTableIfExists('tasks')
        .dropTableIfExists('resources')
        .dropTableIfExists('projects')
};
