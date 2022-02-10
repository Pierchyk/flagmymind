export default function Leaderboard(zone) {
  const scores = zone.scores;
  const times = scores[0].time;
  // console.log(
  //   scores[0].time.m +
  //     "min " +
  //     scores[0].time.s +
  //     "sec " +
  //     scores[0].time.ms +
  //     "ms"
  // );

  // console.log(
  //   scores[0].time.m + ":" + scores[0].time.s + ":" + scores[0].time.ms
  // );

  function timeToString(time) {
    const stringTime = time.m + ":" + time.s + ":" + time.ms;
    return stringTime;
  }

  timeToString(times);
  //il va falloir tranformer le temps en string avec un truc comme ça
  // <span>{props.time.m >= 10 ? props.time.m : "0" + props.time.m}</span>
  //     &nbsp;:&nbsp;
  //     <span>{props.time.s >= 10 ? props.time.s : "0" + props.time.s}</span>
  //     &nbsp;:&nbsp;
  //     <span>{props.time.ms >= 10 ? props.time.ms : "0" + props.time.ms}</span>

  return (
    <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded border border-gray-200">
      <header className="px-5 py-4 border-b border-gray-100">
        <h2 className="font-semibold text-gray-800">{zone.zone}</h2>
      </header>
      <div className="p-3">
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
              <tr>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Joueur</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">
                    Temps (min:sec:ms)
                  </div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">
                    Score (% bonnes réponses)
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-gray-100">
              {scores.map((score) => {
                // console.log(score.score);
                return (
                  <tr>
                    <td className="p-2 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="font-medium text-black">
                          {score.name}
                        </div>
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left text-black">
                        {timeToString(times)}
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left font-medium text-black">
                        {score.score}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
