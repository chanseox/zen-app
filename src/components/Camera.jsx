import React, { useEffect, useRef } from "react"
import "@tensorflow/tfjs"
import * as cocoSsd from "@tensorflow-models/coco-ssd"
import "../styles/Camera.css"

export default function Camera() {
  const videoRef = useRef(null)
  const canvasRef = useRef(null)
  const streamRef = useRef(null)
  const animationRef = useRef(null)
  const modelRef = useRef(null)

  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true })
        streamRef.current = stream

        if (videoRef.current) {
          videoRef.current.srcObject = stream
          videoRef.current.onloadedmetadata = async () => {
            await videoRef.current.play()

            modelRef.current = await cocoSsd.load()

            const detect = async () => {
              
              if (
                videoRef.current &&
                videoRef.current.readyState === 4 &&
                canvasRef.current &&
                modelRef.current
              ) {
                const video = videoRef.current
                const canvas = canvasRef.current
                const ctx = canvas.getContext("2d")
                canvas.width = video.videoWidth
                canvas.height = video.videoHeight

                ctx.clearRect(0, 0, canvas.width, canvas.height)
                ctx.drawImage(video, 0, 0, canvas.width, canvas.height)

                const predictions = await modelRef.current.detect(video)
                console.log("Predictions:", predictions);
                predictions.forEach(pred => {
                  const [x, y, width, height] = pred.bbox
                  ctx.strokeStyle = "lime"
                  ctx.lineWidth = 2
                  ctx.strokeRect(x, y, width, height)
                  ctx.font = "16px Arial"
                  ctx.fillStyle = "lime"
                  ctx.fillText(pred.class, x, y > 10 ? y - 5 : 10)
                })
              }
              animationRef.current = requestAnimationFrame(detect)
            }

            detect()
          }
        }
      } catch (err) {
        console.error("Error accessing webcam:", err)
      }
    }

    startCamera()

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop())
      }
    }
  }, [])

  return (
    <div className="camera-wrapper">
      <div className="webcam">
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "inherit"
          }}
        />
        <canvas ref={canvasRef} className="overlay" />
      </div>
    </div>
  )
}
