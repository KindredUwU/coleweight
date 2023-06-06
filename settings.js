import { @Vigilant, @ButtonProperty, @SwitchProperty, @SelectorProperty, @SliderProperty, @TextProperty, @ColorProperty, Color } from "../Vigilance/index"

@Vigilant("Coleweight/config", "Coleweight Settings", {
    getCategoryComparator: () => (a, b) => {
        const categories = ["General", "Gui", "Stats", "Waypoints", "Foraging"];

        return categories.indexOf(a.name) - categories.indexOf(b.name);
    }
})
class Settings {
    constructor() {
        this.initialize(this);
        this.setCategoryDescription("General", `&aColeweight &bv${JSON.parse(FileLib.read("Coleweight", "metadata.json")).version}` + 
        `\n&aBy &bNinjune`)
    }
    // CAT General
    // SUBCAT Discord
    @ButtonProperty({
        name: "Join my discord!",
        description: "Click to copy my discord link to clipboard.",
        category: "General",
        subcategory: "Discord",
        placeholder: "Copy"
    })
    joinDiscord() {
        ChatLib.command("ct copy https://discord.gg/yj4P4FqHPA", true);
    }
    // SUBCAT Marking
    @SwitchProperty({
        name: "Marked lobbies",
        description: "Enables lobby marking (automatic).",
        category: "General",
        subcategory: "Marking"
    })
    lobbyMarking = false;

    @ButtonProperty({
        name: "Clear lobbies",
        description: "Clears marked lobbies.",
        category: "General",
        subcategory: "Marking",
        placeholder: "Clear"
    })
    clearLobbies() {
        ChatLib.command("cw clearlobbies", true);
    }
    // SUBCAT Pristine Sound
    @TextProperty({
        name: "Low Proc",
        description: "Your low pristine proc for a sound notification. Leave empty to disable. Delimit multiple using ','. No other characters aside from '0'-'9' & ','. Will find even if multiple of low proc.",
        subcategory: "Pristine Sound",
        category: "General"
    })
    lowProc = "";

    @TextProperty({
        name: "Proc Sound",
        description: "Sound for low proc. To find the sound names there is a guide in my discord.",
        subcategory: "Pristine Sound",
        category: "General"
    })
    lowProcSound = "random.orb";

    @TextProperty({
        name: "Proc Volume",
        description: "Volume for proc sound.",
        subcategory: "Pristine Sound",
        category: "General"
    })
    lowProcVolume = "1";

    @TextProperty({
        name: "Proc Pitch",
        description: "Pitch for low proc sound.",
        subcategory: "Pristine Sound",
        category: "General"
    })
    lowProcPitch = "1";
    // SUBCAT Ranked Chat
    @SwitchProperty({
        name: "Rank chat",
        description: "Enables the Coleweight rank message after a name in chat.",
        subcategory: "Ranked Chat",
        category: "General"
    })
    rankChat = true;

    @SwitchProperty({
        name: "Rank everywhere",
        description: "Enables showing Coleweight rank everywhere. (instead of just in Crystal Hollows/Dwarven Mines)",
        subcategory: "Ranked Chat",
        category: "General"
    })
    rankEverywhere = false;
    // SUBCAT General
    @SwitchProperty({
        name: "Track griefers",
        description: "Check lobbies for griefers (on join and when new players join.) Mining cult does not encourage the harrasment of people on this list.",
        subcategory: "General",
        category: "General"
    })
    trackGriefers = true;

    @SwitchProperty({
        name: "Griefer messages everywhere",
        description: "Makes griefer messages appear in all lobbies (not just CH/DM)",
        subcategory: "General",
        category: "General"
    })
    grieferEverywhere = false;

    @SwitchProperty({
        name: "Dwarven notifier",
        description: "Notifies you every day when not in Dwarven Mines.",
        subcategory: "General",
        category: "General"
    })
    dwarvenNotifier = false;

    @SwitchProperty({
        name: "Hide items",
        description: "Makes items invisible.",
        subcategory: "General",
        category: "General"
    })
    invisibleItems = false;

    @SwitchProperty({
        name: "Auto renew Crystal Hollows Pass",
        description: "Renews pass when the 1 minute message pops up.",
        subcategory: "General",
        category: "General"
    })
    autoRenew = true;

    @SwitchProperty({
        name: "Debug",
        description: "Toggles debug mode.",
        subcategory: "General",
        category: "General"
    })
    debug = false;

    @SwitchProperty({
        name: "Efficient miner with dillo warning",
        description: "Shows a warning when you have dillo + efficient miner equipped.",
        subcategory: "General",
        category: "General"
    })
    effDilloWarning = true;
    // SUBCAT Streamer Mode
    @SwitchProperty({
        name: "Streamer mode",
        description: "Various features to protect against snipers.",
        subcategory: "Streamer Mode",
        category: "General"
    })
    streamerMode = false;

    @SwitchProperty({
        name: "Block tab",
        description: "Blocks tab from being rendered. (when streamer mode)",
        subcategory: "Streamer Mode",
        category: "General"
    })
    streamerBlockTab = true;

    @SwitchProperty({
        name: "Block debug",
        description: "Blocks debug menu (F3) from being rendered. (when streamer mode)",
        subcategory: "Streamer Mode",
        category: "General"
    })
    streamerBlockDebug = true;

    @SwitchProperty({
        name: "Block bossbar",
        description: "Blocks bossbar from being rendered. (when streamer mode)",
        subcategory: "Streamer Mode",
        category: "General"
    })
    streamerBlockBossbar = true;

    @SwitchProperty({
        name: "Randomize lobby",
        description: "Randomizes lobby on the sidebar. (when streamer mode)",
        subcategory: "Streamer Mode",
        category: "General"
    })
    streamerRandomizeLobby = true;

    @SwitchProperty({
        name: "Disable waypoints on death",
        description: "Disables any ordered waypoints you have loaded on death. (when streamer mode)",
        subcategory: "Streamer Mode",
        category: "General"
    })
    streamerDisableWaypointsOnDeath = true;
    // CAT Gui
    // SUBCAT Coleweight Tracker
    @SwitchProperty({
        name: "Coleweight tracker",
        description: "Enables the Coleweight tracker. (gain coleweight for a few mins for it to show up)",
        subcategory: "Coleweight Tracker",
        category: "Gui"
    })
    cwToggle = false;

    @ButtonProperty({
        name: "Change Coleweight tracker position",
        description: "Move the location of the coleweight tracker.",
        subcategory: "Coleweight Tracker",
        category: "Gui",
        placeholder: "Open"
    })
    moveCwLocation() {
        ChatLib.command("cw move coleweight", true);
    }

    @TextProperty({
        name: "Pass player",
        description: "Player that you want to pass in Coleweight. Case insensitive. Reload the gui with \"/cw reload coleweight\" after changing this. (leave blank for none)",
        subcategory: "Coleweight Tracker",
        category: "Gui"
    })
    cwPassPlayer = "";
    // SUBCAT Collection
    @SwitchProperty({
        name: "Collection tracker",
        description: "Tracks collections ('/cw track (collection)' to set).",
        subcategory: "Collection",
        category: "Gui"
    })
    collectionTracker = false;

    @SwitchProperty({
        name: "Collection notation",
        description: "Changes collection to be abbrivated like '45K' or '2M'.",
        subcategory: "Collection",
        category: "Gui"
    })
    collectionNotation = true;

    @SwitchProperty({
        name: "Collection show always",
        description: "Changes collection tracker to show always.",
        subcategory: "Collection",
        category: "Gui"
    })
    showCollectionTrackerAlways = false;

    @ButtonProperty({
        name: "Change collection tracker position",
        description: "Move the location of the collection tracker.",
        subcategory: "Collection",
        category: "Gui",
        placeholder: "Open"
    })
    moveCollectionLocation() {
        ChatLib.command("cw move collection", true);
    }
    // SUBCAT Downtime
    @SwitchProperty({
        name: "Downtime tracker",
        description: "Tracks downtime. &4&lDeprecated",
        subcategory: "Downtime",
        category: "Gui"
    })
    downtimeTracker = false;

    @ButtonProperty({
        name: "Change downtime tracker position",
        description: "Move the location of the downtime tracker.",
        subcategory: "Downtime",
        category: "Gui",
        placeholder: "Open"
    })
    moveDowntimeLocation() {
        ChatLib.command("cw move downtime", true);
    }
    // SUBCAT Efficient Miner Overlay
    @SwitchProperty({
        name: "Efficient Miner Overlay",
        description: "Points towards the best block to break with efficient miner. (Also dwarven mines mithril overlay) &4&lDeprecated",
        subcategory: "Efficient Miner Overlay",
        category: "Gui"
    })
    efficientMinerOverlay = false;
    // SUBCAT Mining Abilities
    @SwitchProperty({ 
        name: "Mining abilities",
        description: "Toggles title notification of mining abilities.",
        subcategory: "Mining Abilities",
        category: "Gui"
    })
    miningAbilities = false;

    @SwitchProperty({
        name: "Mining abilities gui",
        description: "Toggles mining abilities gui.",
        subcategory: "Mining Abilities",
        category: "Gui"
    })
    miningAbilitiesGui = false;

    @SwitchProperty({
        name: "Mining abilities selected indicator",
        description: "Tells which ability is selected on the ability gui.",
        subcategory: "Mining Abilities",
        category: "Gui"
    })
    miningAbilitiesSelectedIndicator = true;

    @SelectorProperty({
        name: "Mining abilities alignment",
        description: "Sets the alignment of the tracker.",
        subcategory: "Mining Abilities",
        category: "Gui",
        options: ["Left", "Center", "Right"]
    })
    miningAbilitiesAlignment = 0;

    @ButtonProperty({
        name: "Change mining abilities position",
        description: "Move the location of the mining abilities gui.",
        subcategory: "Mining Abilities",
        category: "Gui",
        placeholder: "Open"
    })
    moveAbilitiesLocation() {
        ChatLib.command("cw move miningabilities", true);
    }
    // SUBCAT Powdertracker
    @SwitchProperty({ 
        name: "Show powdertracker",
        description: "If the tracker overlay should be visible.",
        subcategory: "Powdertracker",
        category: "Gui"
    })
    trackerVisible = false;
    
    @SwitchProperty({
        name: "Show totals",
        description: "If the tracker should show the total amount.",
        subcategory: "Powdertracker",
        category: "Gui"
    })
    showTotals = true;
    
    @SwitchProperty({
        name: "Show rates",
        description: "If the tracker should show the estimated rates per hour.",
        subcategory: "Powdertracker",
        category: "Gui"
    })
    showRates = true;
    
    @SelectorProperty({
        name: "Alignment",
        description: "Sets the alignment of the tracker.",
        subcategory: "Powdertracker",
        category: "Gui",
        options: ["Left", "Right", "Center"]
    })
    trackerAlignment = 0;
    
    @ButtonProperty({
        name: "Change Powdertracker position",
        description: "Move the location of the powdertracker.",
        subcategory: "Powdertracker",
        category: "Gui",
        placeholder: "Open"
    })
    movePowderLocation() {
        ChatLib.command("cw move powdertracker", true);
    }
    // SUBCAT Stopwatch
    @SwitchProperty({
        name: "Stopwatch",
        description: "Toggles visibility of stopwatch (/cw stopwatch)",
        subcategory: "Stopwatch",
        category: "Gui"
    })
    stopwatchVisible = false;

    @ButtonProperty({
        name: "Change stopwatch position",
        description: "Move the location of the stopwatch.",
        subcategory: "Stopwatch",
        category: "Gui",
        placeholder: "Open"
    })
    moveStopwatchLocation() {
        ChatLib.command("cw move stopwatch", true);
    }
    // SUBCAT Timer
    @SwitchProperty({
        name: "Timer",
        description: "Toggles visibility of timer (/cw timer)",
        subcategory: "Timer",
        category: "Gui"
    })
    timerVisible = false;

    @ButtonProperty({
        name: "Change timer position",
        description: "Move the location of the timer.",
        subcategory: "Timer",
        category: "Gui",
        placeholder: "Open"
    })
    moveTimerLocation() {
        ChatLib.command("cw move timer", true);
    }

    @SwitchProperty({
        name: "Timer End Visiblity",
        description: "Toggles visibility of timer at 0m 0s",
        subcategory: "Timer",
        category: "Gui"
    })
    timerEndVisible = false;
    // CAT Stats
    // SUBCAT Stats
    @SwitchProperty({
        name: "Gemstone mining stats",
        description: "Shows gemstone mining speed/fortune on player profile. Also shows tick that you're mining at. (set block below)",
        subcategory: "Stats",
        category: "Stats"
    })
    gemstoneMiningStats = true;

    @SwitchProperty({
        name: "Show powder sum",
        description: "Shows powder sum in HOTM menu.",
        subcategory: "Stats",
        category: "Stats"
    })
    showPowderSum = false;

    @SelectorProperty({
        name: "Tick speed block",
        description: "Sets the tick speed block on player profile.",
        subcategory: "Stats",
        category: "Stats",
        options: ["Green Mithril", "Blue Mithril", "Ruby", "Normal gemstone (jade, amethyst, etc)", "Topaz/Opal", "Jasper"]
    })
    tickSpeedBlock = 3;
    // CAT Waypoints
    // SUBCAT Naturals
    @SwitchProperty({
        name: "Show naturals",
        description: "If natural veins should show.",
        category: "Waypoints",
        subcategory: "Naturals"
    })
    showNaturals = false;

    @SliderProperty({
        name: "Natural range",
        description: "Range that naturals will show up in",
        category: "Waypoints",
        subcategory: "Naturals",
        min: 16,
        max: 64
    })
    naturalRange = 32;
    // SUBCAT Ordered Waypoints
    @SwitchProperty({
        name: "Ordered waypoints line",
        description: "Toggles line for ordered waypoints.",
        category: "Waypoints",
        subcategory: "Ordered Waypoints"
    })
    orderedWaypointsLine = true;

    @SwitchProperty({
        name: "Setup mode",
        description: "Renders all waypoints in 16 block radius with a red outline with wall phase off & renders an additional line to show where the player will be looking when they warp to next block. &cCan cause lag.",
        category: "Waypoints",
        subcategory: "Ordered Waypoints"
    })
    orderedSetup = false;
    
    @SliderProperty({
        name: "Setup Line Thickness",
        description: "The setup line thickness.",
        category: "Waypoints",
        subcategory: "Ordered Waypoints",
        min: 1,
        max: 300
    })
    orderedSetupThickness = 100;

    @SliderProperty({
        name: "Next waypoint distance",
        description: "The distance the player must be in before the ordered waypoints goes to the next one.",
        category: "Waypoints",
        subcategory: "Ordered Waypoints",
        min: 1,
        max: 10
    })
    nextWaypointRange = 3;

    @SliderProperty({
        name: "Ordered trace line thickness",
        description: "Thickness of trace line.",
        category: "Waypoints",
        subcategory: "Ordered Waypoints",
        min: 1,
        max: 10
    })
    orderedLineThickness = 3;

    @ColorProperty({
        name: "Ordered color",
        description: "Sets the color of the line.",
        category: "Waypoints",
        subcategory: "Ordered Waypoints"
    })
    orderedColor = Color.GREEN;

    @SwitchProperty({
        name: "Show Text",
        description: "Shows the distance and name of waypoint for ordered waypoints.",
        category: "Waypoints",
        subcategory: "Ordered Waypoints"
    })
    orderedShowText = true
    // SUBCAT Normal Waypoints
    @SwitchProperty({
        name: "Show normal waypoint distance",
        description: "If normal waypoints (/cw waypoint) should show distance.",
        category: "Waypoints",
        subcategory: "Normal Waypoints",
    })
    waypointShowDistance = true;
    // CAT Foraging
    @SwitchProperty({
        name: "Treecap timer",
        description: "Shows a timer over crosshair that shows time to next treecapitator proc.",
        category: "Foraging"
    })
    treecapTimer = false;
}

export default new Settings()