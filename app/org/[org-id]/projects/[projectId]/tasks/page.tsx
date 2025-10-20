import Tasks from "@/components/org/Tasks";
import octokitApp from "@/lib/octokitapp";

export default async function ProjectTasksPage({ params }: { params: Promise<{ projectId: string, orgMemberId?: string }> }) {
    const { projectId, orgMemberId } = await params;
    const projectName = "Project";

    // try {
    //     const installationId: number = 87501622;
    //     const octokit = await octokitApp.getInstallationOctokit(installationId);
    //     const result = await octokit.request("GET /repos/ashgrover/atomeleon/issues", {
    //         owner: "ashgrover",
    //         repo: "atomeleon",
    //         headers: {
    //             'X-GitHub-Api-Version': '2022-11-28'
    //         }
    //     });

    //     console.log(result.data);
    // } catch (err) {
    //     console.log(err)
    // }

    return (
        <div className="p-5">
            <h1 className="text-base font-bold text-gray-500">{projectName}-{projectId}</h1>
            <h2 className="text-2xl font-bold">Tasks</h2>

            <TasksMetrics />
            <div className="mt-8 w-full">
                <Tasks projectId={projectId} orgMemberId={orgMemberId} />
            </div>
        </div>
    )
}

function TasksMetrics() {
    return (

        <div className="mt-5 flex gap-5">
            <div className="border-1 rounded-md p-2 shadow-md shadow-slate-200">
                <label className="text-sm font-bold text-slate-500">Total</label>
                <div className="border-b-1 my-2" />
                <div className="grid grid-cols-2 gap-x-5 w-fit items-center">
                    <p className="text-sm text-slate-500 font-medium">Tasks Open</p>
                    <p className="font-bold">35</p>
                    <p className="text-sm text-slate-500 font-medium">Tasks Completed</p>
                    <p className="font-bold">55</p>
                </div>
            </div>
            <div className="border-1 rounded-md p-2 shadow-md shadow-slate-200">
                <label className="text-sm font-bold text-slate-500">This Week</label>
                <div className="border-b-1 my-2" />
                <div className="grid grid-cols-2 gap-x-5 w-fit items-center">
                    <p className="text-sm text-slate-500 font-medium">Tasks Open</p>
                    <p className="font-bold">2</p>
                    <p className="text-sm text-slate-500 font-medium">Tasks Completed</p>
                    <p className="font-bold">5</p>
                </div>
            </div>
            <div className="border-1 rounded-md p-2 shadow-md shadow-slate-200">
                <label className="text-sm font-bold text-slate-500">This Month</label>
                <div className="border-b-1 my-2" />
                <div className="grid grid-cols-2 gap-x-5 w-fit items-center">
                    <p className="text-sm text-slate-500 font-medium">Tasks Open</p>
                    <p className="font-bold">8</p>
                    <p className="text-sm text-slate-500 font-medium">Tasks Completed</p>
                    <p className="font-bold">20</p>
                </div>
            </div>
        </div>
    )
}
