/**********************************************************************************************************************************************************************************************************
 * This file contains a reference to all the classes used in the project.
 ********************************************************************************************************************************************************************************************************
 *
 * The TypeScript compiler exports classes in a non deterministic manner, as the extend functionality copies the prototype chain
 * of one object onto another during initialisation and load (to create extensible functionality), the non deterministic nature of the
 * compiler can result in an extend operation referencing a class that is undefined and not yet loaded - which throw an JavaScript error.
 *
 * This file provides the compiler with a strict order in which to export the TypeScript classes to mitigate undefined extend errors
 *
 * @see https://typescript.codeplex.com/workitem/1356 @see https://typescript.codeplex.com/workitem/913
 *
 *********************************************************************************************************************************************************************************************************/
