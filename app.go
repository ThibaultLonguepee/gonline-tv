package main

import (
	"context"

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
}

func (a *App) Authenticate(url, username, password string) error {
	account, err := a.source.Authenticate(url, username, password)
	if err != nil {
		return err
	}
	a.account = account
	return nil
}

func (a *App) ListLiveCategories() ([]*models.Category, error) { return a.source.GetLiveCategories() }
func (a *App) ListVodCategories() ([]*models.Category, error)  { return a.source.GetVodCategories() }
func (a *App) ListShowCategories() ([]*models.Category, error) { return a.source.GetShowCategories() }
