// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// We import object and document schemas
import blockContent from "./blockContent";
import about from "./about";
import contactUs from "./contactUs";
import profile from "./profile";
import twoUp from "./twoUp";
import sponsor from "./sponsor";
import events from "./events";
import partner from "./partner";

import teamArchive from "./teamArchive";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    about,
    profile,
    twoUp,
    sponsor,
    partner,
    events,
    teamArchive,
    contactUs,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    blockContent,
  ]),
});
