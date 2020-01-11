exports.up = function (knex, Promise) {
    return knex.schema.createTable('reliefPitchers', reliefPitchers => {
        reliefPitchers.increments();
        reliefPitchers.string('firstName', 50);
        reliefPitchers.string('lastName', 50);
        reliefPitchers.string('birthday', 50);
        reliefPitchers.string('bats', 1);
        reliefPitchers.string('throws', 1);
        reliefPitchers.string('currentTeam', 50);
        reliefPitchers.string('imageURL', 500);
        reliefPitchers.string('primaryPosition', 50);
        reliefPitchers.string('otherPositions', 50);
        reliefPitchers.string('2017games', 50);
        reliefPitchers.string('2017gamesStarted', 50);
        reliefPitchers.string('2017inningsPitched', 50);
        reliefPitchers.string('2017ERA', 50);
        reliefPitchers.string('2017ERA+', 50);
        reliefPitchers.string('2017FIP', 50);
        reliefPitchers.string('2017xFIP', 50);
        reliefPitchers.string('2017SIERA', 50);
        reliefPitchers.string('2017WHIP', 50);
        reliefPitchers.string('2017H/9', 50);
        reliefPitchers.string('2017HR/9', 50);
        reliefPitchers.string('2017BB/9', 50);
        reliefPitchers.string('2017K/9', 50);
        reliefPitchers.string('2017K/BB', 50);
        reliefPitchers.string('2017saves', 50);
        reliefPitchers.string('2017K%', 50);
        reliefPitchers.string('2017BB%', 50);
        reliefPitchers.string('2017K-BB%', 50);
        reliefPitchers.string('2017BABIP', 50);
        reliefPitchers.string('2017LOB%', 50);
        reliefPitchers.string('2017HRPerFB', 50);
        reliefPitchers.string('2017GB/FB', 50);
        reliefPitchers.string('2017GB%', 50);
        reliefPitchers.string('2017LD%', 50);
        reliefPitchers.string('2017FB%', 50);
        reliefPitchers.string('2017IFFB%', 50);
        reliefPitchers.string('2017softContact%', 50);
        reliefPitchers.string('2017mediumContact%', 50);
        reliefPitchers.string('2017hardContact%', 50);
        reliefPitchers.string('2017ExitVelo', 50);
        reliefPitchers.string('2017FlyBallLineDriveExitVelo', 50);
        reliefPitchers.string('2017Barrel%', 50);
        reliefPitchers.string('2017LaunchAngle', 50);
        reliefPitchers.string('2017avgFastballVelo', 50);
        reliefPitchers.string('2017maxFastballVelo', 50);
        reliefPitchers.string('20174SeamUsage%', 50);
        reliefPitchers.string('2017sinkerUsage%', 50);
        reliefPitchers.string('2017cutterUsage%', 50);
        reliefPitchers.string('2017sliderUsage%', 50);
        reliefPitchers.string('2017changeupUsage%', 50);
        reliefPitchers.string('2017curveUsage%', 50);
        reliefPitchers.string('2017splitterUsage%', 50);
        reliefPitchers.string('2017knuckleUsage%', 50);
        reliefPitchers.string('2017fWAR', 50);
        reliefPitchers.string('2018games', 50);
        reliefPitchers.string('2018gamesStarted', 50);
        reliefPitchers.string('2018inningsPitched', 50);
        reliefPitchers.string('2018ERA', 50);
        reliefPitchers.string('2018ERA+', 50);
        reliefPitchers.string('2018FIP', 50);
        reliefPitchers.string('2018xFIP', 50);
        reliefPitchers.string('2018SIERA', 50);
        reliefPitchers.string('2018WHIP', 50);
        reliefPitchers.string('2018H/9', 50);
        reliefPitchers.string('2018HR/9', 50);
        reliefPitchers.string('2018BB/9', 50);
        reliefPitchers.string('2018K/9', 50);
        reliefPitchers.string('2018K/BB', 50);
        reliefPitchers.string('2018saves', 50);
        reliefPitchers.string('2018K%', 50);
        reliefPitchers.string('2018BB%', 50);
        reliefPitchers.string('2018K-BB%', 50);
        reliefPitchers.string('2018BABIP', 50);
        reliefPitchers.string('2018LOB%', 50);
        reliefPitchers.string('2018HRPerFB', 50);
        reliefPitchers.string('2018GB/FB', 50);
        reliefPitchers.string('2018GB%', 50);
        reliefPitchers.string('2018LD%', 50);
        reliefPitchers.string('2018FB%', 50);
        reliefPitchers.string('2018IFFB%', 50);
        reliefPitchers.string('2018softContact%', 50);
        reliefPitchers.string('2018mediumContact%', 50);
        reliefPitchers.string('2018hardContact%', 50);
        reliefPitchers.string('2018ExitVelo', 50);
        reliefPitchers.string('2018FlyBallLineDriveExitVelo', 50);
        reliefPitchers.string('2018Barrel%', 50);
        reliefPitchers.string('2018LaunchAngle', 50);
        reliefPitchers.string('2018avgFastballVelo', 50);
        reliefPitchers.string('2018maxFastballVelo', 50);
        reliefPitchers.string('20184SeamUsage%', 50);
        reliefPitchers.string('2018sinkerUsage%', 50);
        reliefPitchers.string('2018cutterUsage%', 50);
        reliefPitchers.string('2018sliderUsage%', 50);
        reliefPitchers.string('2018changeupUsage%', 50);
        reliefPitchers.string('2018curveUsage%', 50);
        reliefPitchers.string('2018splitterUsage%', 50);
        reliefPitchers.string('2018knuckleUsage%', 50);
        reliefPitchers.string('2018fWAR', 50);
        reliefPitchers.string('2019games', 50);
        reliefPitchers.string('2019gamesStarted', 50);
        reliefPitchers.string('2019inningsPitched', 50);
        reliefPitchers.string('2019ERA', 50);
        reliefPitchers.string('2019ERA+', 50);
        reliefPitchers.string('2019FIP', 50);
        reliefPitchers.string('2019xFIP', 50);
        reliefPitchers.string('2019SIERA', 50);
        reliefPitchers.string('2019WHIP', 50);
        reliefPitchers.string('2019H/9', 50);
        reliefPitchers.string('2019HR/9', 50);
        reliefPitchers.string('2019BB/9', 50);
        reliefPitchers.string('2019K/9', 50);
        reliefPitchers.string('2019K/BB', 50);
        reliefPitchers.string('2019saves', 50);
        reliefPitchers.string('2019K%', 50);
        reliefPitchers.string('2019BB%', 50);
        reliefPitchers.string('2019K-BB%', 50);
        reliefPitchers.string('2019BABIP', 50);
        reliefPitchers.string('2019LOB%', 50);
        reliefPitchers.string('2019HRPerFB', 50);
        reliefPitchers.string('2019GB/FB', 50);
        reliefPitchers.string('2019GB%', 50);
        reliefPitchers.string('2019LD%', 50);
        reliefPitchers.string('2019FB%', 50);
        reliefPitchers.string('2019IFFB%', 50);
        reliefPitchers.string('2019softContact%', 50);
        reliefPitchers.string('2019mediumContact%', 50);
        reliefPitchers.string('2019hardContact%', 50);
        reliefPitchers.string('2019ExitVelo', 50);
        reliefPitchers.string('2019FlyBallLineDriveExitVelo', 50);
        reliefPitchers.string('2019Barrel%', 50);
        reliefPitchers.string('2019LaunchAngle', 50);
        reliefPitchers.string('2019avgFastballVelo', 50);
        reliefPitchers.string('2019maxFastballVelo', 50);
        reliefPitchers.string('20194SeamUsage%', 50);
        reliefPitchers.string('2019sinkerUsage%', 50);
        reliefPitchers.string('2019cutterUsage%', 50);
        reliefPitchers.string('2019sliderUsage%', 50);
        reliefPitchers.string('2019changeupUsage%', 50);
        reliefPitchers.string('2019curveUsage%', 50);
        reliefPitchers.string('2019splitterUsage%', 50);
        reliefPitchers.string('2019knuckleUsage%', 50);
        reliefPitchers.string('2019fWAR', 50);
        reliefPitchers.string('2020SteamerGamesProjection', 50);
        reliefPitchers.string('2020SteamerGamesStartedProjection', 50);
        reliefPitchers.string('2020SteamerInningsPitchedProjection', 50);
        reliefPitchers.string('2020SteamerERAProjection', 50);
        reliefPitchers.string('2020SteamerFIPProjection', 50);
        reliefPitchers.string('2020SteamerXFIPProjection', 50);
        reliefPitchers.string('2020SteamerSIERAProjection', 50);
        reliefPitchers.string('2020SteamerWHIPProjection', 50);
        reliefPitchers.string('2020SteamerSavesProjection', 50);
        reliefPitchers.string('2020SteamerBABIPProjection', 50);
        reliefPitchers.string('2020SteamerLOB%Projection', 50);
        reliefPitchers.string('2020SteamerFWARProjection', 50);
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('reliefPitchers');
};