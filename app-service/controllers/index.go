package controllers

import (
	"context"
	"net/http"

	"github.com/docker/docker/api/types"
	"github.com/docker/docker/api/types/container"
	"github.com/docker/docker/client"
	"github.com/docker/go-connections/nat"
	"github.com/gin-gonic/gin"
)

// Index handles login get req
func Index(c *gin.Context) {
	c.HTML(http.StatusOK, "index.html", gin.H{
		"title": "Main website",
	})
}

// CreateWorkspace handles createworkspace get req
func CreateWorkspace(c *gin.Context) {

	cli, err := client.NewEnvClient()
	if err != nil {
		c.JSON(200, gin.H{
			"message": "Unable to create client",
			"status":  "failed",
		})
	}

	ctx := context.Background()
	resp, err := cli.ContainerCreate(ctx, &container.Config{
		Image:        "codercom/code-server:v2",
		ExposedPorts: nat.PortSet{"8080": struct{}{}},
		Env:          []string{"PASSWORD=12345", "password=12345"},
		Cmd:          []string{"--auth", "password"},
	}, &container.HostConfig{
		PortBindings: map[nat.Port][]nat.PortBinding{nat.Port("8080"): {{HostIP: "127.0.0.1", HostPort: "8082"}}},
	}, nil, "")
	if err != nil {
		c.JSON(200, gin.H{
			"message": "Unable to create workspace",
			"status":  "failed",
		})
	}

	if err := cli.ContainerStart(ctx, resp.ID, types.ContainerStartOptions{}); err != nil {
		c.JSON(200, gin.H{
			"message": "Unable to start workspace",
			"status":  "failed",
		})
	} else {
		c.JSON(200, gin.H{
			"message": "Created Workspace on port 8081",
			"status":  "success",
		})
	}

}
