package main

import (
	"context"
	"fmt"
	"os"
	"strings"

	"github.com/thibaultlonguepee/goxtream"
	"github.com/thibaultlonguepee/goxtream/models"
)

type App struct {
	ctx     context.Context
	source  *goxtream.Source
	account *models.Account
}

func NewApp() *App {
	return &App{
		source: goxtream.NewSource(0, "source"),
	}
}

func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
	a.authenticateFromMemory()
}

func (a *App) IsAuthenticated() bool {
	return a.source.Authenticated()
}

func (a *App) Authenticate(url, username, password string, remember bool) error {
	account, err := a.source.Authenticate(url, username, password)
	if err != nil {
		return err
	}

	a.account = account
	if remember {
		if err = saveCredentials(url, username, password); err != nil {
			return err
		}
	}
	return nil
}

func (a *App) authenticateFromMemory() {
	bytes, err := os.ReadFile(".gtv_saved_creds")
	if err != nil {
		return
	}

	lines := strings.Split(string(bytes), "\r\n")
	if len(lines) != 3 {
		return
	}

	a.account, _ = a.source.Authenticate(lines[0], lines[1], lines[2])
}

func saveCredentials(url, username, password string) error {
	file, err := os.OpenFile(".gtv_saved_creds", os.O_CREATE|os.O_TRUNC, 0644)
	if err != nil {
		return fmt.Errorf("could not open creds file: %v", err)
	}

	creds := fmt.Sprintf("%v\r\n%v\r\n%v", url, username, password)
	_, err = file.Write([]byte(creds))
	if err != nil {
		return fmt.Errorf("could not write in creds file: %v", err)
	}

	return nil
}
