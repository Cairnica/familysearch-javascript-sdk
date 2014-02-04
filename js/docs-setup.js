NG_DOCS={
  "sections": {
    "api": "API Documentation"
  },
  "pages": [
    {
      "section": "api",
      "id": "index",
      "shortName": "index",
      "type": "overview",
      "moduleName": "index",
      "shortDescription": "Overview",
      "keywords": "$http $q _low_level_commands_plumbing access actual add addition additional adds agent ajax amd angularjs anticipated api app_key approach array arrays asynchronous attribution auth_callback authentication automatically branch browser bugs build builds built call callback called calling calls case catch change changehistory changes childandparents code combine combined comment comments commonjs config console constructors consume contactname contributing convenience cookie copying correct corresponding couple created custom data defer deferred deferred_function dependencies described description_the-promise-api desired developers directory discussion discussionref discussions display docs documentation documented easier element elements endpoint endpoints environment error errors errorthrown example examples exist existing expectations expired exposed extended extracting fact facts fail fairly familysearch features file files format frag front fulfilled fully function functionality functions generate generated getaccesstoken getallresponseheaders getcurrentuser getgivenname getname getnameandid getperson getrequest getresponseheader getstatuscode getsurname getuser gh-pages git github global goal google great grunt handle handled handling header headers hello higher-level host html http http_function https illustrated implemented includes init javascript jquery js jsdoc jshint jshintrc json kernel keywords loader loaders located log low-level manage mapped match memories memory memoryartifactref memorypersona memorypersonaref method methods minified minify mock model module my_access_key nameforms names navigate navigating node note noteref notes object objects occur ojects option optional options org original overview parameter parentsandchildren parts pass passed pasting people performed person plumbing port potential prepending project promise promises properties prototype prototypes provided publish pull purpose push read redirect_goes_here redirects referring registered rejected relationships request requests required requires response responses rest retried return returned returning returns running sample sandbox saved script sdk search searchandmatch searchresult serve server set simple single source sourcedescription sourceref sources spouses src started starts status strict submitting success suppose surname targets test tests textstatus throttling token tool top transient travis-ci type types typically unit uri url user users var wanted watches website window work works wraps write written your_access_key_goes_here"
    },
    {
      "section": "api",
      "id": "attribution",
      "shortName": "attribution",
      "type": "overview",
      "moduleName": "attribution",
      "shortDescription": "Functions related to an attribution object",
      "keywords": "api attribution functions object overview"
    },
    {
      "section": "api",
      "id": "attribution.types:constructor.Attribution",
      "shortName": "constructor.Attribution",
      "type": "function",
      "moduleName": "attribution",
      "shortDescription": "Attribution",
      "keywords": "$getagent $getagentid $getagenturl agent api attribution change changemessage details function functions getagent message modified pass promise property response timestamp types url user"
    },
    {
      "section": "api",
      "id": "authentication",
      "shortName": "authentication",
      "type": "overview",
      "moduleName": "authentication",
      "shortDescription": "These are the authentication functions. getAccessToken is the main function.",
      "keywords": "api authentication authorization call code docs familysearch function functions getaccesstoken getauthcode https main org overview pass"
    },
    {
      "section": "api",
      "id": "authentication.functions:getAccessToken",
      "shortName": "getAccessToken",
      "type": "function",
      "moduleName": "authentication",
      "shortDescription": "Get the access token for the user.",
      "keywords": "access api authcode authentication call calls code docs don editable ensure example familysearch function functions getauthcode http https making net org passed promise requests require resolves returned store token user"
    },
    {
      "section": "api",
      "id": "authentication.functions:getAccessTokenForMobile",
      "shortName": "getAccessTokenForMobile",
      "type": "function",
      "moduleName": "authentication",
      "shortDescription": "Get the access token for the user, passing in their user name and password",
      "keywords": "access api apps authentication call calls docs don ensure familysearch function functions getaccesstoken https making mobile org passing password promise require resolves returned store token user username"
    },
    {
      "section": "api",
      "id": "authentication.functions:getAuthCode",
      "shortName": "getAuthCode",
      "type": "function",
      "moduleName": "authentication",
      "shortDescription": "Open a popup window to allow the user to authenticate and authorize this application.",
      "keywords": "allow api application authenticate authentication authorization authorize call code docs familysearch function functions getaccesstoken https open org passing popup promise user window"
    },
    {
      "section": "api",
      "id": "authentication.functions:hasAccessToken",
      "shortName": "hasAccessToken",
      "type": "function",
      "moduleName": "authentication",
      "shortDescription": "Return whether the access token exists.",
      "keywords": "access api authentication call discovered erased exist exists expired function functions return returns status token true unauthorized"
    },
    {
      "section": "api",
      "id": "authentication.functions:invalidateAccessToken",
      "shortName": "invalidateAccessToken",
      "type": "function",
      "moduleName": "authentication",
      "shortDescription": "Invalidate the current access token",
      "keywords": "access api authentication current function functions invalidate invalidated promise resolved token"
    },
    {
      "section": "api",
      "id": "changeHistory",
      "shortName": "changeHistory",
      "type": "overview",
      "moduleName": "changeHistory",
      "shortDescription": "Functions related to change histories",
      "keywords": "api change change-history changehistory docs familysearch functions histories https org overview"
    },
    {
      "section": "api",
      "id": "changeHistory.functions:getChildAndParentsChanges",
      "shortName": "getChildAndParentsChanges",
      "type": "function",
      "moduleName": "changeHistory",
      "shortDescription": "Get change history for a child and parents relationship",
      "keywords": "api array caprid change changehistory changes child convenience count docs editable endpoint entries example familysearch full function functions getchanges history http https includes init net number options opts org params parents pass promise relationship response return types url"
    },
    {
      "section": "api",
      "id": "changeHistory.functions:getCoupleChanges",
      "shortName": "getCoupleChanges",
      "type": "function",
      "moduleName": "changeHistory",
      "shortDescription": "Get change history for a couple relationship",
      "keywords": "api array change changehistory changes convenience count couple crid docs editable endpoint entries example familysearch full function functions getchanges history http https includes init net number options opts org params pass promise read relationship response return types url"
    },
    {
      "section": "api",
      "id": "changeHistory.functions:getPersonChanges",
      "shortName": "getPersonChanges",
      "type": "function",
      "moduleName": "changeHistory",
      "shortDescription": "Get change history for a person",
      "keywords": "api array change changehistory changes convenience count docs editable endpoint entries example familysearch full function functions getchanges history http https includes init net number options opts org params pass person pid promise response return types url"
    },
    {
      "section": "api",
      "id": "changeHistory.types:constructor.Change",
      "shortName": "constructor.Change",
      "type": "function",
      "moduleName": "changeHistory",
      "shortDescription": "Change made to a person or relationship",
      "keywords": "$getagent $getagentname $getagenturl $getchangereason agent api change changehistory details function functions getagent pass person promise property reason relationship response timestamp title types updated url user"
    },
    {
      "section": "api",
      "id": "discussions",
      "shortName": "discussions",
      "type": "overview",
      "moduleName": "discussions",
      "shortDescription": "Functions related to discussions",
      "keywords": "api discussions docs familysearch functions https org overview"
    },
    {
      "section": "api",
      "id": "discussions.functions:getComments",
      "shortName": "getComments",
      "type": "function",
      "moduleName": "discussions",
      "shortDescription": "Get comments for a discussion",
      "keywords": "api array comment comments convenience currently discussion discussion-comments discussions docs editable endpoint example familysearch full function functions getcomments http https includes init net options opts org params pass promise response types unused url"
    },
    {
      "section": "api",
      "id": "discussions.functions:getDiscussion",
      "shortName": "getDiscussion",
      "type": "function",
      "moduleName": "discussions",
      "shortDescription": "Get information about a discussion",
      "keywords": "api convenience currently discussion discussions docs editable example familysearch full function functions getdiscussion http https includes init net options opts org params pass promise read response types unused url"
    },
    {
      "section": "api",
      "id": "discussions.functions:getMultiDiscussion",
      "shortName": "getMultiDiscussion",
      "type": "function",
      "moduleName": "discussions",
      "shortDescription": "Get multiple discussions at once by requesting them in parallel",
      "keywords": "api currently dids discussion discussionref discussionrefs discussions docs editable example familysearch fulfilled full function functions getdiscussion http https init map multiple net opts org parallel params pass promise read requesting response returning types unused url urls"
    },
    {
      "section": "api",
      "id": "discussions.functions:getPersonDiscussionRefs",
      "shortName": "getPersonDiscussionRefs",
      "type": "function",
      "moduleName": "discussions",
      "shortDescription": "Get references to discussions for a person",
      "keywords": "api array convenience currently discussionref discussionrefs discussions docs editable endpoint example familysearch full function functions getdiscussionrefs http https includes init net options opts org params pass person person-discussion-references pid promise read references response types unused url"
    },
    {
      "section": "api",
      "id": "discussions.types:constructor.Comment",
      "shortName": "constructor.Comment",
      "type": "function",
      "moduleName": "discussions",
      "shortDescription": "Comment on a discussion",
      "keywords": "$getagent $getagentid $getagenturl __broken__ api comment contributor created details discussion discussions function functions getagent pass promise property response text timestamp types url user"
    },
    {
      "section": "api",
      "id": "discussions.types:constructor.Discussion",
      "shortName": "constructor.Discussion",
      "type": "function",
      "moduleName": "discussions",
      "shortDescription": "Discussion",
      "keywords": "$getagent $getagentid $getagenturl $getcomments $getcommentsurl __broken__ api comments contributor created description details discussion discussions endpoint function functions getagent getcomments modified number numberofcomments pass promise property response text timestamp title types url user"
    },
    {
      "section": "api",
      "id": "discussions.types:constructor.DiscussionRef",
      "shortName": "constructor.DiscussionRef",
      "type": "function",
      "moduleName": "discussions",
      "shortDescription": "Reference to a discussion on a person",
      "keywords": "$getdiscussion $getdiscussionurl api details discussion discussionref discussions function functions getdiscussion pass person promise reference response types url"
    },
    {
      "section": "api",
      "id": "init",
      "shortName": "init",
      "type": "overview",
      "moduleName": "init",
      "shortDescription": "Call the init function once to initialize the FamilySearch object before calling any other functions.",
      "keywords": "api call calling familysearch function functions init initialize object overview"
    },
    {
      "section": "api",
      "id": "init.functions:init",
      "shortName": "init",
      "type": "function",
      "moduleName": "init",
      "shortDescription": "Initialize the FamilySearch object",
      "keywords": "$http $q $timeout access access_token action ajax angular api app_key auth_callback auto_expire auto_signin blocked call calls clear convenient cookie creating defer deferred deferred_function developer direct environment eventually exist expired false familysearch function functions future global host hour hours http http_function inactivity init initialize issuing jquery js key node oauth2 object optional opts pass pop-up port production prompted re-read received redirect registered requests response result running sandbox save_access_token saved script server session set settimeout sign staging system timeout timeout_function token true uri user user-initiated users whichever"
    },
    {
      "section": "api",
      "id": "memories",
      "shortName": "memories",
      "type": "overview",
      "moduleName": "memories",
      "shortDescription": "Functions related to memories",
      "keywords": "api docs familysearch functions https memories org overview"
    },
    {
      "section": "api",
      "id": "memories.functions:addMemoryPersona",
      "shortName": "addMemoryPersona",
      "type": "function",
      "moduleName": "memories",
      "shortDescription": "Create a memory (story or photo)",
      "keywords": "api attached create currently docs editable example familysearch full function functions http https init memories memory memorypersona memorypersonaref memorypersonas mid net options opts org params pass people photo promise types unused url"
    },
    {
      "section": "api",
      "id": "memories.functions:addMemoryPersonaRef",
      "shortName": "addMemoryPersonaRef",
      "type": "function",
      "moduleName": "memories",
      "shortDescription": "Create a memory (story or photo)",
      "keywords": "api change changemessage create docs editable example familysearch function functions http https init memories memory memorypersonaref message net options opts org params pass person persona photo pid promise types url"
    },
    {
      "section": "api",
      "id": "memories.functions:createMemory",
      "shortName": "createMemory",
      "type": "function",
      "moduleName": "memories",
      "shortDescription": "Create a memory (story or photo)",
      "keywords": "_must_ api artifact create data description docs document editable example familysearch field file filename formdata function functions http https image init memories memory net object options opts org params pass photo promise story string title type url"
    },
    {
      "section": "api",
      "id": "memories.functions:getMemory",
      "shortName": "getMemory",
      "type": "function",
      "moduleName": "memories",
      "shortDescription": "Get information about a memory",
      "keywords": "api convenience currently docs editable example familysearch full function functions getmemory http https includes init memories memory mid net options opts org params pass promise response types unused url"
    },
    {
      "section": "api",
      "id": "memories.functions:getMemoryComments",
      "shortName": "getMemoryComments",
      "type": "function",
      "moduleName": "memories",
      "shortDescription": "Get comments for a memory",
      "keywords": "api array comment comments convenience currently discussions docs editable endpoint example familysearch full function functions getcomments http https includes init memories memory memory-comments mid net options opts org params pass promise response types unused url"
    },
    {
      "section": "api",
      "id": "memories.functions:getMemoryPersonaRefs",
      "shortName": "getMemoryPersonaRefs",
      "type": "function",
      "moduleName": "memories",
      "shortDescription": "Get references to memories for a person",
      "keywords": "api array convenience currently docs editable endpoint example familysearch full function functions getmemorypersonarefs http https includes init memories memorypersonaref memorypersonarefs net options opts org params pass person person-memory-references pid promise references response types unused url"
    },
    {
      "section": "api",
      "id": "memories.functions:getMemoryPersonas",
      "shortName": "getMemoryPersonas",
      "type": "function",
      "moduleName": "memories",
      "shortDescription": "Get personas for a memory",
      "keywords": "api array convenience currently docs editable endpoint example familysearch full function functions getmemorypersonas http https includes init memories memory memory-personas memorypersona memorypersonas mid net options opts org params pass personas promise response types unused url"
    },
    {
      "section": "api",
      "id": "memories.functions:getPersonMemoriesQuery",
      "shortName": "getPersonMemoriesQuery",
      "type": "function",
      "moduleName": "memories",
      "shortDescription": "Get a paged list of memories for a person",
      "keywords": "api array artifacts convenience count defaults docs editable endpoint example familysearch full function functions getmemories http https includes init list maximum memories memory net number options opts org paged params pass person person-memories-query photo pid promise response return start story type types url values"
    },
    {
      "section": "api",
      "id": "memories.functions:getPersonPortraitUrl",
      "shortName": "getPersonPortraitUrl",
      "type": "function",
      "moduleName": "memories",
      "shortDescription": "Get the URL of the portrait of a person",
      "keywords": "api default docs doesn editable example exist familysearch final follow followredirect function functions http https init memories net options opts org params pass person pid portrait promise redirect return true url"
    },
    {
      "section": "api",
      "id": "memories.functions:getUserMemoriesQuery",
      "shortName": "getUserMemoriesQuery",
      "type": "function",
      "moduleName": "memories",
      "shortDescription": "Get a paged list of memories for a user",
      "keywords": "_agent_ _user_ api array convenience count defaults docs editable example familysearch full function functions getmemories http https includes init list maximum memories memory net note number options opts org paged params pass promise response return start types uid url user"
    },
    {
      "section": "api",
      "id": "memories.types:constructor.Memory",
      "shortName": "constructor.Memory",
      "type": "function",
      "moduleName": "memories",
      "shortDescription": "Memory",
      "keywords": "$addmemorypersona $getdescription $geticonurl $getimageurl $getthumbnailurl $gettitle access api array artifact artifactmetadata artifacttype attached attribution currently description filename full function http icon image init media mediatype memories memory memorypersona memorypersonaref memorypersonas object options opts org params pass people promise property resource resourcetype thumbnail title token type types unused url"
    },
    {
      "section": "api",
      "id": "memories.types:constructor.MemoryArtifactRef",
      "shortName": "constructor.MemoryArtifactRef",
      "type": "function",
      "moduleName": "memories",
      "shortDescription": "Memory Artifact Reference",
      "keywords": "$getmemoryartifacturl $setmemoryartifacturl access api array artifact attributes comma-separated function identifying image lists memories memory memoryartifactref numbers objects property qualifiers rectangle reference token types url"
    },
    {
      "section": "api",
      "id": "memories.types:constructor.MemoryPersona",
      "shortName": "constructor.MemoryPersona",
      "type": "function",
      "moduleName": "memories",
      "shortDescription": "Memory Persona (not a true persona; can only contain a name and a media artifact reference)",
      "keywords": "$addmemoryartifactref $addname $getdisplayname $getgivenname $getmemoryartifactref $getnames $getpreferredname $getsurname add api array artifact display extracted function mar media memories memory memoryartifactref memorypersona names person persona preferred property reference surname true types url"
    },
    {
      "section": "api",
      "id": "memories.types:constructor.MemoryPersonaRef",
      "shortName": "constructor.MemoryPersonaRef",
      "type": "function",
      "moduleName": "memories",
      "shortDescription": "A reference to a MemoryPersona and a",
      "keywords": "$getmemory $getmemoryid $getmemoryurl api details function functions getmemory memories memory memorypersona memorypersonaref pass persona promise property reference resource resourceid response types url"
    },
    {
      "section": "api",
      "id": "notes",
      "shortName": "notes",
      "type": "overview",
      "moduleName": "notes",
      "shortDescription": "Functions related to notes",
      "keywords": "api docs familysearch functions https notes org overview"
    },
    {
      "section": "api",
      "id": "notes.functions:getChildAndParentsNote",
      "shortName": "getChildAndParentsNote",
      "type": "function",
      "moduleName": "notes",
      "shortDescription": "Get information about a child and parents relationship note",
      "keywords": "api caprid child convenience currently docs editable example familysearch full function functions getnote http https includes init net nid note noteref notes options opts org params parents pass promise relationship response types unused url"
    },
    {
      "section": "api",
      "id": "notes.functions:getChildAndParentsNoteRefs",
      "shortName": "getChildAndParentsNoteRefs",
      "type": "function",
      "moduleName": "notes",
      "shortDescription": "Get the note references for a child and parents relationship",
      "keywords": "api array caprid child child-and-parents-relationship-notes convenience currently docs editable endpoint example familysearch full function functions getnoterefs http https includes init net note noteref noterefs notes options opts org params parents pass promise references relationship response types unused url"
    },
    {
      "section": "api",
      "id": "notes.functions:getCoupleNote",
      "shortName": "getCoupleNote",
      "type": "function",
      "moduleName": "notes",
      "shortDescription": "Get information about a couple relationship note",
      "keywords": "api convenience couple crid currently docs editable example familysearch full function functions getnote http https includes init net nid note noteref notes options opts org params pass promise relationship response types unused url"
    },
    {
      "section": "api",
      "id": "notes.functions:getCoupleNoteRefs",
      "shortName": "getCoupleNoteRefs",
      "type": "function",
      "moduleName": "notes",
      "shortDescription": "Get the note references for a couple relationship",
      "keywords": "api array convenience couple couple-relationship-notes crid currently docs editable endpoint example familysearch full function functions getnoterefs http https includes init net note noteref noterefs notes options opts org params pass promise references relationship response types unused url"
    },
    {
      "section": "api",
      "id": "notes.functions:getMultiChildAndParentsNote",
      "shortName": "getMultiChildAndParentsNote",
      "type": "function",
      "moduleName": "notes",
      "shortDescription": "Get multiple notes at once by requesting them in parallel",
      "keywords": "api caprid child currently docs editable example familysearch fulfilled full function functions getchildandparentsnote http https ids init map multiple net nids note noteref noterefs notes opts org parallel params parents pass promise read relationship requesting response returning types unused urls"
    },
    {
      "section": "api",
      "id": "notes.functions:getMultiCoupleNote",
      "shortName": "getMultiCoupleNote",
      "type": "function",
      "moduleName": "notes",
      "shortDescription": "Get multiple notes at once by requesting them in parallel",
      "keywords": "api couple crid currently docs editable example familysearch fulfilled full function functions getcouplenote http https ids init map multiple net nids note noteref noterefs notes opts org parallel params pass promise read relationship requesting response returning types unused urls"
    },
    {
      "section": "api",
      "id": "notes.functions:getMultiPersonNote",
      "shortName": "getMultiPersonNote",
      "type": "function",
      "moduleName": "notes",
      "shortDescription": "Get multiple notes at once by requesting them in parallel",
      "keywords": "api currently docs editable example familysearch fulfilled full function functions getpersonnote http https ids init map multiple net nids note noteref noterefs notes opts org parallel params pass person pid promise read requesting response returning types unused url urls"
    },
    {
      "section": "api",
      "id": "notes.functions:getPersonNote",
      "shortName": "getPersonNote",
      "type": "function",
      "moduleName": "notes",
      "shortDescription": "Get information about a note",
      "keywords": "api convenience currently docs editable example familysearch full function functions getnote http https includes init net nid note noteref notes options opts org params pass person pid promise response types unused url"
    },
    {
      "section": "api",
      "id": "notes.functions:getPersonNoteRefs",
      "shortName": "getPersonNoteRefs",
      "type": "function",
      "moduleName": "notes",
      "shortDescription": "Get note references for a person",
      "keywords": "api array convenience currently docs editable endpoint example familysearch full function functions getnoterefs http https includes init net note noteref noterefs notes options opts org params pass person person-notes pid promise references response types unused url"
    },
    {
      "section": "api",
      "id": "notes.types:constructor.Note",
      "shortName": "constructor.Note",
      "type": "function",
      "moduleName": "notes",
      "shortDescription": "Note",
      "keywords": "api attribution function note notes object property subject text title types"
    },
    {
      "section": "api",
      "id": "notes.types:constructor.NoteRef",
      "shortName": "constructor.NoteRef",
      "type": "function",
      "moduleName": "notes",
      "shortDescription": "Reference to a note on a person",
      "keywords": "$getnote $getnoteurl api details function functions getchildandparentsnote getcouplenote getpersonnote note noteref notes pass person promise property reference response sources subject types url"
    },
    {
      "section": "api",
      "id": "parentsAndChildren",
      "shortName": "parentsAndChildren",
      "type": "overview",
      "moduleName": "parentsAndChildren",
      "shortDescription": "Functions related to parents and children relationships",
      "keywords": "api children docs familysearch functions https org overview parents parents-and-children parentsandchildren relationships"
    },
    {
      "section": "api",
      "id": "parentsAndChildren.functions:getChildAndParents",
      "shortName": "getChildAndParents",
      "type": "function",
      "moduleName": "parentsAndChildren",
      "shortDescription": "Get information about a child and parents relationship.",
      "keywords": "access api caprid child child-and-parents childandparents convenience docs editable example familysearch full function functions getperson getrelationship http https includes init net object options opts org parameter params parents parentsandchildren pass person persons promise relationship response return set true types url"
    },
    {
      "section": "api",
      "id": "parentsAndChildren.types:constructor.ChildAndParents",
      "shortName": "constructor.ChildAndParents",
      "type": "function",
      "moduleName": "parentsAndChildren",
      "shortDescription": "Child and parents relationship",
      "keywords": "$getchanges $getchild $getchildid $getchildurl $getfather $getfatherfacts $getfatherid $getfatherurl $getmother $getmotherfacts $getmotherid $getmotherurl $getnoterefs $getsourcerefs __broken__ api array child childandparents fact facts father function functions getchildandparentschanges getchildandparentsnoterefs getchildandparentssourcerefs getperson mother notes parent-relationship parents parentsandchildren person promise property relationship response sources type types url"
    },
    {
      "section": "api",
      "id": "pedigree",
      "shortName": "pedigree",
      "type": "overview",
      "moduleName": "pedigree",
      "shortDescription": "Get someone&#39;s ancestry or descendancy",
      "keywords": "ancestry api descendancy docs familysearch https org overview pedigree"
    },
    {
      "section": "api",
      "id": "pedigree.functions:getAncestry",
      "shortName": "getAncestry",
      "type": "function",
      "moduleName": "pedigree",
      "shortDescription": "Get the ancestors of a specified person and optionally a specified spouse with the following convenience functions",
      "keywords": "additional ancestor ancestors ancestry api array ascendancy convenience docs editable example exists familysearch full function functions generations getascendancynumber getperson getpersons http https includes init max net notes number object objects optionally options opts org params pass pedigree person persondetails persons pid promise retrieve return returns set spouse true types"
    },
    {
      "section": "api",
      "id": "pedigree.functions:getDescendancy",
      "shortName": "getDescendancy",
      "type": "function",
      "moduleName": "pedigree",
      "shortDescription": "Get the descendants of a specified person and optionally a specified spouse with the following convenience functions",
      "keywords": "additional api array ascendancy convenience descendancy descendants descendency docs editable example exists familysearch function functions generations getancestry getdescendancynumber getperson getpersons http https includes init max net notes number object objects optionally options opts org params parts pass pedigree person persons pid promise retrieve return returns separate spouse surname true types unavailable"
    },
    {
      "section": "api",
      "id": "person",
      "shortName": "person",
      "type": "overview",
      "moduleName": "person",
      "shortDescription": "Functions related to persons",
      "keywords": "api docs familysearch functions https org overview person persons"
    },
    {
      "section": "api",
      "id": "person.functions:getMultiPerson",
      "shortName": "getMultiPerson",
      "type": "function",
      "moduleName": "person",
      "shortDescription": "Get multiple people at once by requesting them in parallel",
      "keywords": "api currently docs editable example familysearch fulfilled function functions getperson http https init map multiple net options opts org parallel params pass people person pids promise read requesting response returning unused"
    },
    {
      "section": "api",
      "id": "person.functions:getPerson",
      "shortName": "getPerson",
      "type": "function",
      "moduleName": "person",
      "shortDescription": "Get the specified person",
      "keywords": "api convenience currently docs editable example familysearch full function functions getperson http https includes init net options opts org params pass person pid promise response types unused url"
    },
    {
      "section": "api",
      "id": "person.functions:getPersonChangeSummary",
      "shortName": "getPersonChangeSummary",
      "type": "function",
      "moduleName": "person",
      "shortDescription": "Get the change summary for a person. For detailed change information see functions in the changeHistory module",
      "keywords": "api array broken change changehistory changes convenience currently detailed docs editable endpoint example familysearch full function functions getchanges http https includes init module net options opts org params pass person person-change-summary pid promise response rest sandbox summary types unused url"
    },
    {
      "section": "api",
      "id": "person.functions:getPersonWithRelationships",
      "shortName": "getPersonWithRelationships",
      "type": "function",
      "moduleName": "person",
      "shortDescription": "Get a person and their children, spouses, and parents.",
      "keywords": "addition api array child childandparents children convenience couple docs editable example familysearch father full function functions getchildids getchildidsof getchildrelationships getchildrelationshipsof getchildren getchildrenof getfatherids getfathers getmotherids getmothers getparentrelationships getperson getprimaryid getprimaryperson getspouseids getspouserelationship getspouserelationships getspouses http https ids init mother net null object objects options opts org params parent parents parentsandchildren pass person persons pid primary promise relationship relationships relative requested response retrieve return set spouse spouseid spouses true types"
    },
    {
      "section": "api",
      "id": "person.functions:getRelationshipsToSpouses",
      "shortName": "getRelationshipsToSpouses",
      "type": "function",
      "moduleName": "person",
      "shortDescription": "Get the relationships to a person&#39;s spouses.",
      "keywords": "access api array convenience couple docs editable endpoint example familysearch full function functions getperson getrelationships getspouseids http https ids includes init net object options opts org parameter params pass person persons pid promise relationship relationships response return set spouse-relationships spouses string true types url"
    },
    {
      "section": "api",
      "id": "person.types:constructor.Fact",
      "shortName": "constructor.Fact",
      "type": "function",
      "moduleName": "person",
      "shortDescription": "Fact",
      "keywords": "$getdate $getformaldate $getplace api attribution event fact form function http object org original person place property standard type types"
    },
    {
      "section": "api",
      "id": "person.types:constructor.Name",
      "shortName": "constructor.Name",
      "type": "function",
      "moduleName": "person",
      "shortDescription": "Name",
      "keywords": "$getfulltext $getgivenname $getnameformscount $getsurname api attribution form forms full function http number object org person preferred property read surname text true type types"
    },
    {
      "section": "api",
      "id": "person.types:constructor.Person",
      "shortName": "constructor.Person",
      "type": "function",
      "moduleName": "person",
      "shortDescription": "Person",
      "keywords": "$addmemorypersonaref $addname $getbirthdate $getbirthplace $getchanges $getdeathdate $getdeathplace $getdiscussionrefs $getdisplayname $getfacts $getgender $getgivenname $getlifespan $getmemorypersonarefs $getnames $getnoterefs $getpersistentidentifier $getpreferredname $getrelationshipstospouses $getsourcerefs $getsurname add api array arrays attributes attribution birth birthdate birthplace change changehistory changemessage changes conclusion confidence count death deathdate deathplace discussions display entries fact facts false female function functions gender getmemorypersonarefs getpersonchanges getpersondiscussionrefs getpersonnoterefs getpersonsourcerefs getrelationshipstospouses http identifers identifier includes init lifespan living male map memories memory memorypersonaref message names notes number object options opts params pass persistent person persona persons place preferred promise property reference relationships response return set sources surname true type types url values year"
    },
    {
      "section": "api",
      "id": "plumbing",
      "shortName": "plumbing",
      "type": "overview",
      "moduleName": "plumbing",
      "shortDescription": "These are the low-level &quot;plumbing&quot; functions. You don&#39;t normally need to use these functions.",
      "keywords": "api don functions low-level overview plumbing"
    },
    {
      "section": "api",
      "id": "plumbing.functions:del",
      "shortName": "del",
      "type": "function",
      "moduleName": "plumbing",
      "shortDescription": "Low-level call to delete to a specific REST endpoint from FamilySearch",
      "keywords": "api behaves call data delete endpoint familysearch function functions headers http init low-level map options opts pass plumbing promise promises relative response responsemapper rest returned specific url"
    },
    {
      "section": "api",
      "id": "plumbing.functions:get",
      "shortName": "get",
      "type": "function",
      "moduleName": "plumbing",
      "shortDescription": "Low-level call to get a specific REST endpoint from FamilySearch",
      "keywords": "api behaves call data endpoint familysearch function functions headers http init low-level map options opts parameters params pass plumbing promise promises query relative response responsemapper rest returned specific url"
    },
    {
      "section": "api",
      "id": "plumbing.functions:getTotalProcessingTime",
      "shortName": "getTotalProcessingTime",
      "type": "function",
      "moduleName": "plumbing",
      "shortDescription": "Return the total &quot;processing time&quot; spent in FamilySearch REST endpoints",
      "keywords": "api endpoints familysearch function functions milliseconds plumbing processing rest return spent time total"
    },
    {
      "section": "api",
      "id": "plumbing.functions:getUrl",
      "shortName": "getUrl",
      "type": "function",
      "moduleName": "plumbing",
      "shortDescription": "Low-level call to get a  URL from the discovery resource given a resource name, an possible-url, and a set of parameters",
      "keywords": "absolute api call discovery function functions low-level parameters params plumbing possible-url possibleurl promise resource resourcename return set url"
    },
    {
      "section": "api",
      "id": "plumbing.functions:http",
      "shortName": "http",
      "type": "function",
      "moduleName": "plumbing",
      "shortDescription": "Low-level call to issue an http request to a specific REST endpoint from FamilySearch",
      "keywords": "api behaves call data delete endpoint familysearch function functions headers http init issue low-level map method number object options opts pass plumbing post promise promises relative request response responsemapper rest retries retry return returned specific times url"
    },
    {
      "section": "api",
      "id": "plumbing.functions:post",
      "shortName": "post",
      "type": "function",
      "moduleName": "plumbing",
      "shortDescription": "Low-level call to post to a specific REST endpoint from FamilySearch",
      "keywords": "api behaves call data endpoint familysearch function functions headers http init low-level map options opts pass plumbing post promise promises relative response responsemapper rest returned specific url"
    },
    {
      "section": "api",
      "id": "plumbing.functions:put",
      "shortName": "put",
      "type": "function",
      "moduleName": "plumbing",
      "shortDescription": "Low-level call to put to a specific REST endpoint from FamilySearch",
      "keywords": "api behaves call data endpoint familysearch function functions headers http init low-level map options opts pass plumbing post promise promises relative response responsemapper rest returned specific url"
    },
    {
      "section": "api",
      "id": "plumbing.functions:setTotalProcessingTime",
      "shortName": "setTotalProcessingTime",
      "type": "function",
      "moduleName": "plumbing",
      "shortDescription": "Set the &quot;processing time&quot; spent in FamilySearch REST endpoints.",
      "keywords": "api counter endpoints familysearch function functions milliseconds plumbing processing reset rest set spent time wanted"
    },
    {
      "section": "api",
      "id": "searchAndMatch",
      "shortName": "searchAndMatch",
      "type": "overview",
      "moduleName": "searchAndMatch",
      "shortDescription": "Functions related to search and match",
      "keywords": "api docs familysearch functions https match org overview search search-and-match searchandmatch"
    },
    {
      "section": "api",
      "id": "searchAndMatch.functions:getPersonMatches",
      "shortName": "getPersonMatches",
      "type": "function",
      "moduleName": "searchAndMatch",
      "shortDescription": "Get the matches (possible duplicates) for a person",
      "keywords": "api array convenience currently docs duplicates editable endpoint example familysearch full function functions getindex getresultscount getsearchresults http https includes init matches net number options opts org params pass person person-matches pid promise response search searchandmatch searchresult searchresults starting total types unused url"
    },
    {
      "section": "api",
      "id": "searchAndMatch.functions:getPersonMatchesQuery",
      "shortName": "getPersonMatchesQuery",
      "type": "function",
      "moduleName": "searchAndMatch",
      "shortDescription": "Get matches for someone not in the tree",
      "keywords": "api array candidateid context convenience described docs editable example exception familysearch function functions getindex getpersonsearch getresultscount getsearchresults http https includes init match matches net number options opts org parameter parameters params pass person promise response restricts search searchandmatch searchresult searchresults starting total tree types valid"
    },
    {
      "section": "api",
      "id": "searchAndMatch.functions:getPersonSearch",
      "shortName": "getPersonSearch",
      "type": "function",
      "moduleName": "searchAndMatch",
      "shortDescription": "Search people",
      "keywords": "additional allows api append array birthdate birthplace context convenience count dates deathdate deathplace described docs editable example familysearch father female full function functions gender getcontext getindex getresultscount getsearchresults givenname http https includes init list male marriagedate marriageplace matches mother net non-exact number options opts org parameter parameters params pass people places promise requests response result returned search searchandmatch searchresult searchresults spouse start starting subsequent surname tilde token total types work works"
    },
    {
      "section": "api",
      "id": "searchAndMatch.types:constructor.SearchResult",
      "shortName": "constructor.SearchResult",
      "type": "function",
      "moduleName": "searchAndMatch",
      "shortDescription": "Reference from a person or relationship to a source",
      "keywords": "$getchildids $getchildren $getfatherids $getfathers $getfullprimaryperson $getmotherids $getmothers $getperson $getprimaryperson $getspouseids $getspouses api array aware better child father function functions getperson higher mother objects pedigree person persons pid primary promise property reference relationship response result returned score search searchandmatch searchresult searchresults source spouse title types"
    },
    {
      "section": "api",
      "id": "sourceBox",
      "shortName": "sourceBox",
      "type": "overview",
      "moduleName": "sourceBox",
      "shortDescription": "Functions related to a user&#39;s source box",
      "keywords": "api box docs familysearch functions https org overview source source-box sourcebox user"
    },
    {
      "section": "api",
      "id": "sourceBox.functions:getCollection",
      "shortName": "getCollection",
      "type": "function",
      "moduleName": "sourceBox",
      "shortDescription": "Get information about a user-defined collection",
      "keywords": "api collection convenience currently docs editable example familysearch full function functions getcollection http https includes init net options opts org params pass promise response sourcebox types udcid unused url user-defined"
    },
    {
      "section": "api",
      "id": "sourceBox.functions:getCollectionsForUser",
      "shortName": "getCollectionsForUser",
      "type": "function",
      "moduleName": "sourceBox",
      "shortDescription": "Search people",
      "keywords": "api array collection collections collections-for-user convenience currently docs editable endpoint example familysearch full function functions getcollections http https includes init net options opts org params pass people promise response search sourcebox types uid unused url user"
    },
    {
      "section": "api",
      "id": "sourceBox.functions:getCollectionSourceDescriptions",
      "shortName": "getCollectionSourceDescriptions",
      "type": "function",
      "moduleName": "sourceBox",
      "shortDescription": "Get a paged list of source descriptions in a user-defined collection",
      "keywords": "api array collection collection-source-descriptions convenience count descriptions docs editable endpoint example familysearch full function functions getsourcedescriptions http https includes init list maximum net options opts org paged params pass promise response return source sourcebox sourcedescription sourcedescriptions sources start types udcid url user-defined zero-based"
    },
    {
      "section": "api",
      "id": "sourceBox.functions:getCollectionSourceDescriptionsForUser",
      "shortName": "getCollectionSourceDescriptionsForUser",
      "type": "function",
      "moduleName": "sourceBox",
      "shortDescription": "Get a paged list of source descriptions in all user-defined collections defined by a user",
      "keywords": "api array collection-source-descriptions-for-user collections convenience count defined descriptions docs editable endpoint example familysearch full function functions getsourcedescriptions http https includes init list maximum net options opts org paged params pass promise response return source sourcebox sourcedescription sourcedescriptions sources start types uid url user user-defined zero-based"
    },
    {
      "section": "api",
      "id": "sourceBox.types:constructor.Collection",
      "shortName": "constructor.Collection",
      "type": "function",
      "moduleName": "sourceBox",
      "shortDescription": "Collection",
      "keywords": "$getsourcedescriptions api attribution collection count folder function functions getcollectionsourcedescriptions maximum number object params promise property response return size source sourcebox sources start title types zero-based"
    },
    {
      "section": "api",
      "id": "sources",
      "shortName": "sources",
      "type": "overview",
      "moduleName": "sources",
      "shortDescription": "Functions related to sources",
      "keywords": "api docs familysearch functions https org overview sources"
    },
    {
      "section": "api",
      "id": "sources.functions:getChildAndParentsSourceRefs",
      "shortName": "getChildAndParentsSourceRefs",
      "type": "function",
      "moduleName": "sources",
      "shortDescription": "Get the source references for a child and parents relationship",
      "keywords": "api array caprid child convenience currently docs editable example familysearch full function functions getsourcerefs http https includes init net options opts org params parents pass promise references relationship response source sourceref sourcerefs sources types unused url"
    },
    {
      "section": "api",
      "id": "sources.functions:getCoupleSourceRefs",
      "shortName": "getCoupleSourceRefs",
      "type": "function",
      "moduleName": "sources",
      "shortDescription": "Get the source references for a couple relationship",
      "keywords": "api array convenience couple crid currently docs editable example familysearch full function functions getsourcerefs http https includes init net options opts org params pass promise references relationship response source sourceref sourcerefs sources types unused url"
    },
    {
      "section": "api",
      "id": "sources.functions:getMultiSourceDescription",
      "shortName": "getMultiSourceDescription",
      "type": "function",
      "moduleName": "sources",
      "shortDescription": "Get multiple source descriptions at once by requesting them in parallel",
      "keywords": "api currently description descriptions docs editable example familysearch fulfilled full function functions getsourcedescription http https ids init map multiple net opts org parallel params pass promise read requesting response returning sdids source sourceref sourcerefs sources types unused url urls"
    },
    {
      "section": "api",
      "id": "sources.functions:getPersonSourceRefs",
      "shortName": "getPersonSourceRefs",
      "type": "function",
      "moduleName": "sources",
      "shortDescription": "Get references to sources for a person",
      "keywords": "api array convenience currently docs editable endpoint example familysearch full function functions getsourcerefs http https includes init net options opts org params pass person person-source-references pid promise references response sourceref sourcerefs sources types unused url"
    },
    {
      "section": "api",
      "id": "sources.functions:getSourceDescription",
      "shortName": "getSourceDescription",
      "type": "function",
      "moduleName": "sources",
      "shortDescription": "Get information about a source",
      "keywords": "api convenience currently description docs editable example familysearch full function functions getsourcedescription http https includes init net options opts org params pass promise response sdid source sourcedescription sourceref sources types unused url"
    },
    {
      "section": "api",
      "id": "sources.functions:getSourceRefsQuery",
      "shortName": "getSourceRefsQuery",
      "type": "function",
      "moduleName": "sources",
      "shortDescription": "Get the people, couples, and child-and-parents relationships referencing a source",
      "keywords": "api child child-and-parents convenience couple couples currently description docs editable endpoint example familysearch full function functions getchildandparentssourcerefmap getcouplesourcerefmap getpersonsourcerefmap http https ids includes init map net options opts org params parent pass people person promise referencing relationship relationships response sdid source source-references-query sourceref sourcerefs sources types unused url"
    },
    {
      "section": "api",
      "id": "sources.types:constructor.SourceDescription",
      "shortName": "constructor.SourceDescription",
      "type": "function",
      "moduleName": "sources",
      "shortDescription": "Description of a source",
      "keywords": "$getcitation $getsourcerefsquery $gettext $gettitle api attribution citation description function functions getsourcerefsquery object promise property record response source sourcedescription sources text title types url"
    },
    {
      "section": "api",
      "id": "sources.types:constructor.SourceRef",
      "shortName": "constructor.SourceRef",
      "type": "function",
      "moduleName": "sources",
      "shortDescription": "Reference from a person or relationship to a source",
      "keywords": "$getsourcedescription $getsourcedescriptionurl $gettagnames api array attribution description details function functions getsourcedescription http names object org pass person promise property reference relationship response source sourceref sources tag types url"
    },
    {
      "section": "api",
      "id": "spouses",
      "shortName": "spouses",
      "type": "overview",
      "moduleName": "spouses",
      "shortDescription": "Functions related to spouse relationships",
      "keywords": "api docs familysearch functions https org overview relationships spouse spouses"
    },
    {
      "section": "api",
      "id": "spouses.functions:getCouple",
      "shortName": "getCouple",
      "type": "function",
      "moduleName": "spouses",
      "shortDescription": "Get information about a couple relationship",
      "keywords": "access api convenience couple crid docs editable example familysearch full function functions getperson getrelationship http https includes init net object options opts org parameter params pass person persons promise relationship response return set spouses true types url"
    },
    {
      "section": "api",
      "id": "spouses.types:constructor.Couple",
      "shortName": "constructor.Couple",
      "type": "function",
      "moduleName": "spouses",
      "shortDescription": "Couple relationship",
      "keywords": "$getchanges $getfacts $gethusband $gethusbandid $gethusbandurl $getmarriagefact $getnoterefs $getsourcerefs $getwife $getwifeid $getwifeurl api array couple exports fact facts function functions getcouplechanges getcouplenoterefs getcouplesourcerefs getperson http husband marriage multiple notes org person promise property relationship response sources spouses type types url wife"
    },
    {
      "section": "api",
      "id": "user",
      "shortName": "user",
      "type": "overview",
      "moduleName": "user",
      "shortDescription": "Functions related to users",
      "keywords": "api docs familysearch functions https org overview user users"
    },
    {
      "section": "api",
      "id": "user.functions:getAgent",
      "shortName": "getAgent",
      "type": "function",
      "moduleName": "user",
      "shortDescription": "Get information about the specified agent (contributor)",
      "keywords": "agent aid api convenience currently docs editable example familysearch full function functions getagent http https includes init net options opts org params pass response types unused url user"
    },
    {
      "section": "api",
      "id": "user.functions:getCurrentUser",
      "shortName": "getCurrentUser",
      "type": "function",
      "moduleName": "user",
      "shortDescription": "Get the current user with the following convenience function",
      "keywords": "api convenience current currently docs editable example familysearch function functions getuser http https init net options opts org params pass promise response types unused user"
    },
    {
      "section": "api",
      "id": "user.functions:getCurrentUserPersonId",
      "shortName": "getCurrentUserPersonId",
      "type": "function",
      "moduleName": "user",
      "shortDescription": "Get the id of the current user person in the tree; pass into getPerson for details",
      "keywords": "api current currently details docs editable example familysearch function functions getperson http https init net options opts org params pass person promise tree unused user"
    },
    {
      "section": "api",
      "id": "user.functions:getMultiAgent",
      "shortName": "getMultiAgent",
      "type": "function",
      "moduleName": "user",
      "shortDescription": "Get multiple agents at once by requesting them in parallel",
      "keywords": "agent agents aids api currently docs editable example familysearch fulfilled full function functions getagent http https ids init map multiple net opts org parallel params pass promise read requesting response returning unused urls user"
    },
    {
      "section": "api",
      "id": "user.types:constructor.Agent",
      "shortName": "constructor.Agent",
      "type": "function",
      "moduleName": "user",
      "shortDescription": "An agent is returned from getAgent.",
      "keywords": "$getaccountname $getemail $getname account agent api contact contributor email function functions getagent ids property returned types user"
    },
    {
      "section": "api",
      "id": "user.types:constructor.User",
      "shortName": "constructor.User",
      "type": "function",
      "moduleName": "user",
      "shortDescription": "User - a user is returned from getCurrentUser;",
      "keywords": "agent api contact contactname contributor email full fullname function functions getcurrentuser ids property returned treeuserid types user"
    }
  ],
  "apis": {
    "api": true
  },
  "html5Mode": false,
  "startPage": "/api",
  "scripts": [
    "angular.min.js"
  ]
};