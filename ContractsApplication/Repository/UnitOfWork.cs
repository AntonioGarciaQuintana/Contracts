using ContractsApplication.Context;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ContractsApplication.Repository
{
    public class UnitOfWork : IUnitOfWork
    {
        private Dictionary<Type, object> _repositories;
        private ModelContext _context;

        public UnitOfWork()
        {
            _repositories = new Dictionary<Type, object>();
        }

        public IRepository<TEntity> GetRepository<TEntity>() where TEntity : class
        {
            CreateContext();

            if (!_repositories.Keys.Contains(typeof(TEntity)))
            {
                var repository = new Repository<TEntity>(_context);
                try
                {
                    _repositories.Add(typeof(TEntity), repository);
                }
                catch
                {
                    repository.Dispose();
                }
            }
            return (Repository<TEntity>)_repositories[typeof(TEntity)];
        }

        public void SaveChanges()
        {
            if (_context != null)
            {
                _context.SaveChanges();
            }
        }

        private void CreateContext()
        {
            if (_context != null) return;

            _context = new ModelContext();
        }

        protected void Dispose(bool disposing)
        {
            if (!disposing) return;

            if (_repositories != null)
            {
                _repositories.Clear();
                _repositories = null;
            }
        }
    }
}