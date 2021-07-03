/* eslint-ignore */

// https://github.com/fizure/sequelize-hierarchy/blob/master/lib/types.ts

// https://github.com/overlookmotel/sequelize-hierarchy

import { FindOptions, } from 'sequelize';

export interface HierarchyFindOptions extends FindOptions {
  hierarchy?: boolean;
}

export interface IsHierarchyOptions {
  // ## Aliases for relations
  as?: string; // 'parent'
  childrenAs?: string; // 'parent'
  ancestorsAs?: string; // 'ancestors'
  descendentsAs?: string; // 'descendents'
  //
  // ## Fields
  levelFieldName?: string; // 'hierarchyLevel'
  levelFieldType?: string; // Sequelize.INTEGER.UNSIGNED
  levelFieldAttributes?: string; // undefined
  primaryKey?: string; // model's primaryKeyAttribute.
  foreignKey?: string; // 'parentId'
  foreignKeyAttributes?: string; // undefined
  throughKey?: string; // '<model name>Id'
  throughForeignKey?: string; // 'ancestorId'
  //
  // ## Hierarchy (through) table
  through?: string; // '<model name>ancestor'
  throughTable?: string; // '<model name plural>ancestors'
  throughSchema?: string; // 'model.options.schema'
  freezeTableName?: boolean;
  camelThrough?: boolean;
  //
  // ## Cascading deletions
  // onDelete: 'CASCADE',
  //
  // ## Misc
  labels?: boolean;
}
