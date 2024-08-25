import React from "react";
import { useTimelineData, useModal, useTooltip } from "./Hook/hooks";
import ErrorBoundary from "./component/ErrorBoundary";
import Modal from "./component/Modal";
import TimelineItem from "./component/TimelineItem";
import Tooltip from "./component/tooltip";
import "./App.css";

function App() {
  const { data, error } = useTimelineData();
  const { isOpen: isPRModalOpen, content: prModalContent, openModal: openPRModal, closeModal: closePRModal } = useModal();
  const { content: tooltipContent, visible: tooltipVisible, showTooltip, hideTooltip } = useTooltip();

  return (
    <ErrorBoundary>
      <div className="timeline-container">
      <h1 className="tg-1">CYCLE-TIME</h1>

        {data ? (
          <div className="timeline">
            <TimelineItem
              type ="First commit"
              date={data.firstCommitDate}
            />

            <TimelineItem
              type={`Open MR: ${data.numberOfOpenMergeRequests}`}
              date={data.openMergeRequestDate}
              onClick={() =>
                openPRModal(
                  data.data.map((mr) => (
                    <div id={`R-content-${mr.id}`} key={mr.id}>
                      <ul className="R">
                        <li className="event" data-date={mr.age}>
                          <h3>
                            <strong>{mr.title}</strong> <br />
                            <strong>Assignees:</strong> {mr.assignees}
                            <br />
                            <strong>Reviewers:</strong> {mr.reviewers}
                          </h3>
                        </li>
                      </ul>
                    </div>
                  ))
                )
              }
            />

            <TimelineItem
              type="PR Merge"
              date={data.completedMergeRequestDates?.length > 0
                ? data.completedMergeRequestDates[
                    data.completedMergeRequestDates.length - 1
                  ]
                : "N/A"}
              devTime={data.data.length > 0 ? data.data[0].devTime : "N/A"}
              revTime={data.data.length > 0
                ? data.data[data.data.length - 1].revTime
                : "N/A"}
            />

            <div
              className="timeline-arrow arrow-1"
            
            >
              dev:{data.devTime}
            </div>

            <div
              className="timeline-arrow arrow-2"
           
            >
              rev:{data.revTime}
            </div>

          </div>
        ) : (
          <p> </p>
        )}
        <Modal isOpen={isPRModalOpen} onClose={closePRModal} content={prModalContent} />
      </div>
    </ErrorBoundary>
  );
}

export default App;